import React, { useEffect, useState } from 'react';
import AppState, { Category, WishList } from '../../../../../typings';
import * as actions from '../redux/actions';
import { getCategories } from '../../../../resources/redux/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

interface ComponentProps {
  list: WishList | null;
  getWishlist: (id: string) => void;
  getCategories: () => void;
}

type ParamTypes = {
  id: string;
};

enum ModalsIndex {
  NONE = 0,
  CATEGORY = 1,
  HEADLINES = 2,
  IMAGE = 3,
}

const EditEvent = ({ list, getWishlist, getCategories }: ComponentProps) => {
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | string>('');
  const [category, setCategory] = useState<Category | ''>('');
  const [modal, setModal] = useState(ModalsIndex.NONE);
  const [data, setData] = useState({
    headline: '',
    date: '',
    note: '',
  });

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (!list || id !== list._id) {
      console.log('gett wishlist');
      getWishlist(id);
    }

    if (list) {
      setImage(list.coverImage);
      setFile(list.coverImage);
      setCategory(list.categoryID);
      setData({
        headline: list.title,
        date: list.date,
        note: list.description || '',
      });
    }
  }, [list, getWishlist, id]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return null;
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.event.list.data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (id: string) => dispatch(actions.getWishlist(id)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);

import React from 'react';
import AppState, { WishList } from '../../../../../typings';
import * as actions from '../redux/actions';
import { getCategories } from '../../../../resources/redux/actions';
import { connect } from 'react-redux';
import EventForm from '../components/EventForm';

interface ComponentProps {
  list: WishList | null;
  getWishlist: (id: string) => void;
  getCategories: () => void;
}

const EditEvent = ({ list, getWishlist, getCategories }: ComponentProps) => {
  return (
    <EventForm
      type="edit"
      getCategories={getCategories}
      getWishlist={getWishlist}
      list={list}
    />
  );
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

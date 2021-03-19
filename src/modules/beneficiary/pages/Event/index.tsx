import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import AppState, { WishList } from '../../../../typings';
import * as actions from './redux/actions';
import { CoverImage, HeadlineText } from './styles';

type ParamTypes = {
  id: string;
};

type ComponentProps = {
  list: WishList | null;
  getWishlist: (id: string) => void;
};

const Event = ({ list, getWishlist }: ComponentProps) => {
  const { id } = useParams<ParamTypes>();
  // const [data, setData] = use
  const [activeExplainer, setActiveExplainer] = useState(1);
  const [explainer, setExplainer] = useState({ show: false, active: 1 });

  const navItems = [
    () => <Link to={`/event/edit/${id}`}>Archive</Link>,
    () => <Link to={`/event/edit/${id}`}>Edit</Link>,
    () => <Link to={`/event/share`}>Share</Link>,
    () => <Link to={`/event/wallet/${id}`}>Wallet</Link>,
  ];

  useEffect(() => {
    if (!list || list._id !== id) {
      getWishlist(id);
    }
  }, [list, id, getWishlist]);

  console.log(list);
  return list ? (
    <>
      <DashboardLayout pageTitle="" navItems={navItems} showBack>
        <DashboardContainer>
          <CoverImage src={list.coverImage} alt={list.title} />
          <HeadlineText>
            <h2>{list.title}</h2>
            <p>
              If you are here, it’s because you count as one of our loved ones.
              Below are the items we deeply wish for as we setup our new home.
            </p>
          </HeadlineText>
        </DashboardContainer>
      </DashboardLayout>
    </>
  ) : null;
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.event.list.data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (id: string) => dispatch(actions.getWishlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

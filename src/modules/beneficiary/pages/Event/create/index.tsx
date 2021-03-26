import React from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../../../resources/redux/actions';
import EventForm from '../components/EventForm';

interface ComponentProps {
  getCategories: () => void;
}

const Event: React.FC<ComponentProps> = ({ getCategories }) => {
  return <EventForm type="create" getCategories={getCategories} />;
};

const mapStateToProps = (state: any) => ({
  categories: state.event?.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: async () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

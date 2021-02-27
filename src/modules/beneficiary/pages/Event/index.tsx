import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { getCategories } from './redux/actions';
import { Category } from './redux/types';

interface ComponentProps {
  categories: Category[] | undefined;
  getCategories: () => void;
}

const Event: React.FC<ComponentProps> = ({ getCategories, categories }) => {
  const navItems = [() => <a>Finish</a>];

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <DashboardLayout
      pageTitle="Setup Event"
      navItems={navItems}
    ></DashboardLayout>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.event?.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: async () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

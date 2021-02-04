import React from 'react';
import DashboardLayout from '../../commons/DashboardLayout';

const Event = () => {
  const navItems = [() => <a>Finish</a>];
  return (
    <DashboardLayout
      pageTitle="Setup Event"
      showBack
      navItems={navItems}
    ></DashboardLayout>
  );
};

export default Event;

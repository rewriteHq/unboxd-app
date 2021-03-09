import React from 'react';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import NoItem from '../../../../../components/NoItem';
import { DashboardWrapper } from '../../Dashboard/styles';
import { AddItemButton, Explainer } from './styles';

const AddEvent = () => {
  return (
    <DashboardLayout pageTitle="Add your needs" showBack>
      <DashboardWrapper>
        <div className="container">
          <NoItem />
        </div>
      </DashboardWrapper>
      <Explainer>
        Populate your list with all that you need. Click plus button to add item
      </Explainer>
      <AddItemButton>+</AddItemButton>
    </DashboardLayout>
  );
};

export default AddEvent;

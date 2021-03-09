import React from 'react';
import { useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import NoItem from '../../../../../components/NoItem';
import { DashboardWrapper } from '../../Dashboard/styles';
import { AddItem, Explainer } from './styles';

type ParamTypes = {
  id: string;
};

const AddEvent = () => {
  const { id } = useParams<ParamTypes>();
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
      <AddItem to={`/event/add-gift/${id}`}>+</AddItem>
    </DashboardLayout>
  );
};

export default AddEvent;

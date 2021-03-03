import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { PlainButton } from '../../../../components/Button/styles';
import { getCategories } from './redux/actions';
import { Category } from './redux/types';

import { HeadlineInput, ImageHolder } from './styles';

interface ComponentProps {
  categories: Category[] | undefined;
  getCategories: () => void;
}

const Event: React.FC<ComponentProps> = ({ getCategories, categories }) => {
  const navItems = [() => <a>Finish</a>];
  const [image, setImage] = useState('');
  const [headline, setHeadline] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    console.log('wow');
    getCategories();
  }, [getCategories]);

  return (
    <DashboardLayout pageTitle="Setup Event" navItems={navItems}>
      <DashboardContainer>
        <ImageHolder>Choose cover image</ImageHolder>
        <SpaceBetween>
          <HeadlineInput placeholder="Type headline here" />
          <PlainButton>See examples</PlainButton>
        </SpaceBetween>
      </DashboardContainer>
    </DashboardLayout>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.event?.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: async () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

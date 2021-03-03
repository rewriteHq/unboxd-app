import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { PlainButton } from '../../../../components/Button/styles';
import CategoriesModal from './components/CategoriesModal';
import { getCategories } from './redux/actions';
import { Category } from './redux/types';

import { HeadlineInput, ImageHolder } from './styles';

const ModalsIndex = {
  NONE: 0,
  CATEGORY: 1,
  HEADLINES: 2,
  IMAGE: 3,
  UNSPLASH: 4,
};

interface ComponentProps {
  categories: Category[] | undefined;
  getCategories: () => void;
}

const Event: React.FC<ComponentProps> = ({ getCategories, categories }) => {
  const navItems = [() => <a>Finish</a>];
  const [image, setImage] = useState('');
  const [headline, setHeadline] = useState('');
  const [category, setCategory] = useState<Category | ''>('');
  const [date, setDate] = useState('');
  const [modal, setModal] = useState(0);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const selectCategory = (cat: Category) => {
    setCategory(cat);
    setModal(ModalsIndex.HEADLINES);
  };

  return (
    <>
      <DashboardLayout pageTitle="Setup Event" navItems={navItems}>
        <DashboardContainer>
          <ImageHolder>Choose cover image</ImageHolder>
          <SpaceBetween>
            <HeadlineInput placeholder="Type headline here" />
            <PlainButton onClick={() => setModal(ModalsIndex.CATEGORY)}>
              See examples
            </PlainButton>
          </SpaceBetween>
        </DashboardContainer>
      </DashboardLayout>

      <CategoriesModal
        show={modal === ModalsIndex.CATEGORY}
        goBack={() => setModal(ModalsIndex.NONE)}
        select={selectCategory}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.event?.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: async () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

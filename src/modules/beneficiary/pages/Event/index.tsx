import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../commons/ImageUploadModal';
import PageBottom from '../../../../commons/PageBottom';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import Button from '../../../../components/Button';
import { PlainButton } from '../../../../components/Button/styles';
import Input from '../../../../components/Input';
import CategoriesModal from './components/CategoriesModal';
import HeadlinesModal from './components/HeadlinesModal';
import { getCategories } from './redux/actions';
import { Category } from './redux/types';

import { CoverImage, HeadlineInput, ImageHolder } from './styles';

const ModalsIndex = {
  NONE: 0,
  CATEGORY: 1,
  HEADLINES: 2,
  IMAGE: 3,
};

interface ComponentProps {
  categories: Category[] | undefined;
  getCategories: () => void;
}

const Event: React.FC<ComponentProps> = ({ getCategories, categories }) => {
  const navItems = [() => <a>Finish</a>];
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | string>('');
  const [headline, setHeadline] = useState('');
  const [category, setCategory] = useState<Category | ''>('');
  const [date, setDate] = useState('');
  const [modal, setModal] = useState(ModalsIndex.NONE);
  const [note, setNote] = useState('');

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const selectCategory = useCallback((cat: Category) => {
    setCategory(cat);
    setModal(ModalsIndex.HEADLINES);
  }, []);

  const selectHeadline = useCallback((headline: string) => {
    setHeadline(headline);
    setModal(ModalsIndex.NONE);
  }, []);

  const fromGallery = useCallback((file: File) => {
    setFile(file);
    setImage(URL.createObjectURL(file));
    setModal(ModalsIndex.NONE);
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage(imageUrl);
    setFile(imageUrl);
    setModal(ModalsIndex.NONE);
  }, []);

  return (
    <>
      <DashboardLayout pageTitle="Setup Event" navItems={navItems}>
        <DashboardContainer>
          {image ? (
            <CoverImage
              onClick={() => setModal(ModalsIndex.IMAGE)}
              src={image}
              alt="cover photo"
            />
          ) : (
            <ImageHolder onClick={() => setModal(ModalsIndex.IMAGE)}>
              Choose cover image
            </ImageHolder>
          )}

          <SpaceBetween>
            <HeadlineInput
              placeholder="Type headline here"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
            {!headline && (
              <PlainButton onClick={() => setModal(ModalsIndex.CATEGORY)}>
                See examples
              </PlainButton>
            )}
          </SpaceBetween>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            label="Type welcome note"
          />
        </DashboardContainer>
        <PageBottom>
          <Button>Save</Button>
        </PageBottom>
      </DashboardLayout>

      <CategoriesModal
        show={modal === ModalsIndex.CATEGORY}
        goBack={() => setModal(ModalsIndex.NONE)}
        select={selectCategory}
      />

      {category && (
        <HeadlinesModal
          show={modal === ModalsIndex.HEADLINES}
          goBack={() => setModal(ModalsIndex.CATEGORY)}
          category={category}
          select={selectHeadline}
        />
      )}

      <ImageUploadModal
        show={modal === ModalsIndex.IMAGE}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
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

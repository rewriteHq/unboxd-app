import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
import { createEvent } from './service';

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
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | string>('');
  const [category, setCategory] = useState<Category | ''>('');
  const [modal, setModal] = useState(ModalsIndex.NONE);
  const [data, setData] = useState({
    headline: '',
    date: '',
    note: '',
  });

  const history = useHistory();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const selectCategory = useCallback((cat: Category) => {
    setCategory(cat);
    setModal(ModalsIndex.HEADLINES);
  }, []);

  const selectHeadline = useCallback(
    (headline: string) => {
      setData({ ...data, headline });
      setModal(ModalsIndex.NONE);
    },
    [data]
  );

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      title: data.headline,
      categoryID: category && category._id,
      coverImage: file,
      description: data.note,
      date: data.date,
    };

    const [err, result] = await createEvent(payload);

    if (err) {
      return err;
    }

    history.push(`/event/add/${result._id}`);
  };

  const closeModals = () => setModal(ModalsIndex.NONE);

  return (
    <>
      <DashboardLayout pageTitle="Setup Event">
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
              value={data.headline}
              name="headline"
              onChange={handleChange}
            />
            {!data.headline && (
              <PlainButton onClick={() => setModal(ModalsIndex.CATEGORY)}>
                See examples
              </PlainButton>
            )}
          </SpaceBetween>
          <Input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="note"
            value={data.note}
            onChange={handleChange}
            label="Type welcome note"
          />
        </DashboardContainer>
        <PageBottom>
          <Button onClick={handleSubmit}>Save</Button>
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
        close={closeModals}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.event?.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: async () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

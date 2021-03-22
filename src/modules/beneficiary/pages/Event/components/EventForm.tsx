import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../../commons/ImageUploadModal';
import PageBottom from '../../../../../commons/PageBottom';
import { SpaceBetween } from '../../../../../commons/UtilityStyles/Flex';
import Button from '../../../../../components/Button';
import { PlainButton } from '../../../../../components/Button/styles';
import Input from '../../../../../components/Input';
import { Category } from '../../../../../typings';
import { createOrEditEvent } from '../service';
import { CoverImage, HeadlineInput, ImageHolder } from '../styles';
import { EventFormProps, EventParamsType } from '../types';
import CategoriesModal from './CategoriesModal';
import HeadlinesModal from './HeadlinesModal';

enum ModalsIndex {
  NONE = 0,
  CATEGORY = 1,
  HEADLINES = 2,
  IMAGE = 3,
}

const eventParams = {
  create: { showBack: false, title: 'Setup Event' },
  edit: { showBack: true, title: 'Edit Event' },
};

const EventForm = ({
  list,
  getCategories,
  getWishlist,
  type,
}: EventFormProps) => {
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | string>('');
  const [category, setCategory] = useState<Category | ''>('');
  const [modal, setModal] = useState(ModalsIndex.NONE);
  const [data, setData] = useState({
    headline: '',
    date: '',
    note: '',
  });

  const { id } = useParams<EventParamsType>();
  const history = useHistory();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (id && type === 'edit') {
      if (!list || list._id !== id) {
        getWishlist && getWishlist(id);
      } else {
        setImage(list.coverImage);
        setFile(list.coverImage);
        setCategory(list.categoryID);
        setData({
          headline: list.title,
          date: list.date,
          note: list.description || '',
        });
      }
    }
  }, [type, id, list, getWishlist]);

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

  const closeModals = () => setModal(ModalsIndex.NONE);

  const handleSubmit = async () => {
    const payload = {
      title: data.headline,
      categoryID: category && category._id,
      coverImage: file,
      description: data.note,
      date: data.date,
    };

    const [err, result] = await createOrEditEvent(payload, type, id);

    if (err) {
      return err;
    }

    const nextUrl =
      type === 'create' ? `/event/add/${result._id}` : `/event/${id}`;

    history.push(nextUrl);
  };

  return (
    <>
      <DashboardLayout
        pageTitle={eventParams[type]['title']}
        showBack={eventParams[type]['showBack']}
      >
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

export default EventForm;

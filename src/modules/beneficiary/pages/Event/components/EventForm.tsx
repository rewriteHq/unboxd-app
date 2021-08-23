import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import slugify from 'slugify';

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
import {
  CoverImage,
  DatePickerWrapper,
  HeadlineInput,
  ImageHolder,
} from '../styles';
import { EventFormProps, EventParamsType } from '../types';
import CategoriesModal from './CategoriesModal';
import HeadlinesModal from './HeadlinesModal';
import { ReactComponent as LogoEmblem } from '../../../../../assets/img/logo/logo_emblem.svg';
import Select from '../../../../../components/Select';
import {
  generateYears,
  months,
  getDaysInMonth,
} from '../../../../../utils/date';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'store/types';
import { generateCategoriesSelect } from 'utils/helpers/generateCategoriesSelect';
import LogoLoader from 'commons/LogoLoader';
import Notify from '../../../../../utils/notify/notify';

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

interface CategoriesInterface {
  value: string;
  text: string;
}

const EventForm = ({
  list,
  getCategories,
  getWishlist,
  type,
}: EventFormProps) => {
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | string>('');
  const [category, setCategory] = useState<Category | ''>('');
  const [categoriesArr, setCategoriesArr] = useState<CategoriesInterface[]>([]);
  const [modal, setModal] = useState(ModalsIndex.NONE);
  const [data, setData] = useState({
    headline: '',
    date: '',
    note: '',
  });
  const [date, setDate] = useState({
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const { id } = useParams<EventParamsType>();
  const history = useHistory();

  const {
    data: { categories },
  } = useSelector((state: GlobalStoreState) => state.resources);

  useEffect(() => {
    const data = generateCategoriesSelect(categories);
    setCategoriesArr(data);
  }, [categories]);

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
    console.log('2', file);
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

  const enteredValidHeadline = data.headline.trim() !== '';

  const handleSubmit = async () => {
    if (!enteredValidHeadline) {
      const message = 'Headline cannot be empty';
      Notify.bottom(message);
      return;
    }

    const submitData = {
      date: `${date.year}-${date.month}-${date.day}`,
      slug: slugify(data.headline, {
        replacement: '-',
        lower: true,
        strict: true,
        locale: 'en',
      }),
    };

    const payload = new FormData();

    payload.append('title', data.headline);
    payload.append('categoryID', category && category._id);
    payload.append('coverImage', file);
    payload.append('description', data.note);
    payload.append('date', submitData.date);
    payload.append('slug', submitData.slug);

    const [err, result] = await createOrEditEvent(payload, type, id);

    if (err) {
      return err;
    }

    const nextUrl =
      type === 'create' ? `/event/add/${result._id}` : `/event/${id}`;

    if (type === 'edit' && id && getWishlist) {
      getWishlist(id);
    }

    history.push(nextUrl);
  };

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory((prev) => ({
      ...prev,
      _id: e.target.value,
      name: e.target[e.target.selectedIndex].innerText,
    }));
  };
  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => ({ ...prev, year: parseInt(e.target.value) }));
  };
  const handleMonthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => ({ ...prev, month: parseInt(e.target.value) }));
  };
  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => ({ ...prev, day: parseInt(e.target.value) }));
  };

  return (
    <>
      <DashboardLayout
        pageTitle={eventParams[type]['title']}
        showBack={eventParams[type]['showBack']}
      >
        {categories.length > 0 ? (
          <>
            <DashboardContainer>
              {image ? (
                <CoverImage
                  onClick={() => setModal(ModalsIndex.IMAGE)}
                  src={image}
                  alt="cover photo"
                />
              ) : (
                <ImageHolder onClick={() => setModal(ModalsIndex.IMAGE)}>
                  <LogoEmblem />
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
                  <PlainButton
                    onClick={() => setModal(ModalsIndex.CATEGORY)}
                    style={{ padding: 0, paddingTop: '5px' }}
                  >
                    See examples
                  </PlainButton>
                )}
              </SpaceBetween>
              <p className="tiny-section-header">
                What type of event are you creating a wishlist for?
              </p>
              <Select
                id="categories"
                items={categoriesArr}
                label="Event type"
                handleChange={handleCategorySelect}
                required
              />
              <p className="tiny-section-header">When is it happening?</p>
              <DatePickerWrapper>
                <Select
                  id="year"
                  items={generateYears(new Date(), 10)}
                  label="Year"
                  handleChange={handleYearSelect}
                  required
                />
                <Select
                  id="months"
                  items={months}
                  label="Month"
                  handleChange={handleMonthSelect}
                  required
                />
                <Select
                  id="day"
                  items={getDaysInMonth(
                    new Date().getMonth(),
                    new Date().getFullYear()
                  )}
                  label="Day"
                  handleChange={handleDaySelect}
                  required
                />
              </DatePickerWrapper>
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
          </>
        ) : (
          <LogoLoader />
        )}
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

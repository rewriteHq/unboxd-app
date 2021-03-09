import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { ModalComponentProps } from './types';
import { PageHeadingSmall } from '../Heading';
import { Photo } from './types';
import PhotoGroup from './PhotoGroup';
import Notify from '../../utils/notify/notify';

const unsplashApi = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
});

const UnsplashModal = ({ show, selectImage, close }: ModalComponentProps) => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getImages = () => {
      unsplashApi.search
        .getPhotos({
          query,
          orientation: 'landscape',
          perPage: +process.env.REACT_APP_UNSPLASH_PER_PAGE! as number,
        })
        .then((result) => setPhotos(result.response!.results))
        .catch((err) => Notify.bottom(err.errors[0]));
    };

    if (query) {
      const debounce = setTimeout(getImages, 1000);

      return () => clearTimeout(debounce);
    }
  }, [query]);

  return (
    <Modal show={show} onClose={close}>
      <Modal.Bottom>
        <Modal.Main>
          <PageHeadingSmall centered>Unsplash</PageHeadingSmall>
          <Input
            label="Search for an image"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <PhotoGroup photos={photos} selectImage={selectImage} />
        </Modal.Main>
      </Modal.Bottom>
    </Modal>
  );
};

export default UnsplashModal;

import { useState } from 'react';
import { createApi } from 'unsplash-js';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { ModalComponentProps } from './types';
import { PageHeadingSmall } from '../Heading';
import { Photo } from './types';
import PhotoGroup from './PhotoGroup';

const UNSPLASH_PER_PAGE = 20;

const unsplashApi = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
});

const UnsplashModal = ({ show, selectImage }: ModalComponentProps) => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);

  const getImages = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    unsplashApi.search
      .getPhotos({
        query,
        orientation: 'landscape',
        perPage: UNSPLASH_PER_PAGE,
      })
      .then((result) => setPhotos(result.response!.results))
      .catch((err) => console.log(err));
  };

  return (
    <Modal show={show}>
      <Modal.Bottom>
        <Modal.Main>
          <PageHeadingSmall centered>Unsplash</PageHeadingSmall>
          <form onSubmit={getImages}>
            <Input
              label="Search for an image"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <PhotoGroup photos={photos} selectImage={selectImage} />
        </Modal.Main>
      </Modal.Bottom>
    </Modal>
  );
};

export default UnsplashModal;

import { useState } from 'react';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { PageHeadingSmall } from '../Heading';

interface ComponentProps {
  show: boolean;
  selectImage?: (url: string) => void;
}

const UnsplashModal = ({ show }: ComponentProps) => {
  const [query, setQuery] = useState('');

  return (
    <Modal show={show}>
      <Modal.Bottom>
        <Modal.Main>
          <PageHeadingSmall centered>Unsplash</PageHeadingSmall>
          <form>
            <Input
              label="Search for an image"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </Modal.Main>
      </Modal.Bottom>
    </Modal>
  );
};

export default UnsplashModal;

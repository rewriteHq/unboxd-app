import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import { Button, FileInput, FileLabel } from './styles';
import UnsplashModal from './unsplash';

interface ComponentProps {
  show: boolean;
  fromGallery: (file: File) => void;
  fromUnsplash: (imageUrl: string) => void;
  close: () => void;
}

const ImageUploadModal = ({
  show,
  fromGallery,
  fromUnsplash,
  close,
}: ComponentProps) => {
  const [unsplashModal, setUnsplashModal] = useState(false);

  const changeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target && e.target.files) {
        fromGallery(e.target.files[0]);
      }
    },
    [fromGallery]
  );

  const selectImage = useCallback(
    (url: string) => {
      setUnsplashModal(false);
      fromUnsplash(url);
    },
    [fromUnsplash]
  );

  const closeModals = useCallback(() => {
    setUnsplashModal(false);
    close();
  }, [close]);

  return (
    <>
      <Modal show={show} onClose={close}>
        <Modal.Bottom>
          <Container className="container">
            <FileLabel htmlFor="file">
              Choose from gallery
              <FileInput
                name="file"
                type="file"
                id="file"
                accept="image/png, image/jpeg"
                onChange={changeFile}
              />
            </FileLabel>
            <Button onClick={() => setUnsplashModal(true)}>
              Search on Unsplash
            </Button>
          </Container>
        </Modal.Bottom>
      </Modal>
      <UnsplashModal
        show={unsplashModal}
        selectImage={selectImage}
        close={closeModals}
      />
    </>
  );
};

const Container = styled.div`
  flex-direction: column;
  width: 100%;
`;

export default ImageUploadModal;

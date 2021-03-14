import { useCallback, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../../commons/ImageUploadModal';
import PageBottom from '../../../../../commons/PageBottom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import PriceInput from '../../../../../components/Input/price';
import { CoverImage, ImageHolder, UploadButton } from './styles';

interface ImageType {
  file: File | string;
  url: string;
}

const AddGift = () => {
  const [data, setData] = useState({ price: '', title: '' });
  const [showImageModal, setImageModal] = useState(false);
  const [image, setImage] = useState<ImageType>({ file: '', url: '' });

  const changePrice = ({ value }: NumberFormatValues) =>
    setData({ ...data, price: value });

  const fromGallery = useCallback((file: File) => {
    setImage({ file, url: URL.createObjectURL(file) });
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage({ file: imageUrl, url: imageUrl });
  }, []);

  const toggleImageModal = useCallback(
    () => setImageModal((prev) => !prev),
    []
  );

  return (
    <DashboardLayout pageTitle="Add item" showBack>
      <DashboardContainer>
        {image.url ? (
          <CoverImage
            src={image.url}
            alt="Cover Image"
            onClick={toggleImageModal}
          />
        ) : (
          <ImageHolder>
            <UploadButton onClick={toggleImageModal}>
              Upload Item Image
            </UploadButton>
          </ImageHolder>
        )}

        <Input
          label="What do you need?"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <PriceInput label="Price" value={data.price} onChange={changePrice} />
      </DashboardContainer>
      <PageBottom>
        <Button>Save</Button>
      </PageBottom>
      <ImageUploadModal
        show={showImageModal}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={toggleImageModal}
      />
    </DashboardLayout>
  );
};

export default AddGift;

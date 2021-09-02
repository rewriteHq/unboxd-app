import { useCallback, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../../commons/ImageUploadModal';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import PriceInput from '../../../../../components/Input/price';
import { getWishlist } from '../../Event/redux/actions';
import { addGift } from '../service';
import { CoverImage, ImageHolder, UploadButton } from '../styles';

interface ImageType {
  file: File | string;
  url: string;
}

interface ComponentProps {
  getWishlist: (id: string) => void;
}

interface ParamTypes {
  id: string;
}

const AddGift = ({ getWishlist }: ComponentProps) => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const [data, setData] = useState({ price: '', title: '' });
  const [showImageModal, setImageModal] = useState(false);
  const [image, setImage] = useState<ImageType>({ file: '', url: '' });

  const changePrice = ({ value }: NumberFormatValues) =>
    setData({ ...data, price: value });

  const fromGallery = useCallback((file: File) => {
    setImage({ file, url: URL.createObjectURL(file) });
    setImageModal(false);
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage({ file: imageUrl, url: imageUrl });
    setImageModal(false);
  }, []);

  const toggleImageModal = useCallback(
    () => setImageModal((prev) => !prev),
    []
  );

  const createGift = async () => {
    setLoading(true);
    const payload = new FormData();

    payload.append('name', data.title);
    payload.append('cost', data.price);
    payload.append('image', image.file);

    const [err] = await addGift({ data: payload, id });

    if (err) {
      return [err];
    }

    getWishlist(id);
    history.goBack();
    setLoading(false);
  };

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
      <Button onClick={createGift} loading={loading} disabled={loading}>
        Save
      </Button>
      </DashboardContainer>
      <ImageUploadModal
        show={showImageModal}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={toggleImageModal}
      />
    </DashboardLayout>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (id: string) => dispatch(getWishlist(id)),
});

export default connect(null, mapDispatchToProps)(AddGift);

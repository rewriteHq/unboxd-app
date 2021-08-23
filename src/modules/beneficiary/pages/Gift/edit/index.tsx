import { useCallback, useEffect, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../../commons/ImageUploadModal';
import PageBottom from '../../../../../commons/PageBottom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import PriceInput from '../../../../../components/Input/price';
import { addGift } from '../redux/actions';
import { updateGift } from '../service';
import { CoverImage, ImageHolder } from '../styles';
import { ImageType, ParamTypes, ComponentProps } from './types';

const EditGift = ({ gifts, getGift }: ComponentProps) => {
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const [data, setData] = useState({ price: '', title: '' });
  const [showImageModal, setImageModal] = useState(false);
  const [image, setImage] = useState<ImageType>({ file: '', url: '' });

  useEffect(() => {
    const gift = gifts[id];

    if (gift) {
      setData({
        price: gift.cost.toString(),
        title: gift.name,
      });

      setImage({
        file: gift.coverImage,
        url: gift.coverImage,
      });
    } else {
      getGift(id);
    }
  }, [id, gifts, getGift]);

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

  const editGift = async () => {
    const payload = new FormData();

    payload.append('name', data.title);
    payload.append('cost', data.price);
    payload.append('image', image.file!);

    const [err, result] = await updateGift({ data: payload, id });

    if (err) {
      return err;
    }

    history.push(`/event/add/${result.wishlistId}`);
  };

  return (
    <DashboardLayout pageTitle="Edit item" showBack>
      <DashboardContainer>
        {image.url ? (
          <CoverImage
            src={image.url}
            alt="Cover Image"
            onClick={toggleImageModal}
          />
        ) : (
          <ImageHolder />
        )}

        <Input
          label="What do you need?"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <PriceInput label="Price" value={data.price} onChange={changePrice} />
      </DashboardContainer>
      <PageBottom>
        <Button onClick={editGift}>Save</Button>
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

const mapStateToProps = (state: any) => ({
  gifts: state.gifts.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getGift: (id: string) => dispatch(addGift(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGift);

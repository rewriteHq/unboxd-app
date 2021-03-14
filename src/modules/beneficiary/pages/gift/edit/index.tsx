import { useCallback, useEffect, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { useHistory, useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../../commons/ImageUploadModal';
import PageBottom from '../../../../../commons/PageBottom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import PriceInput from '../../../../../components/Input/price';
import { GiftType } from '../../../../../typings';
import { updateGift, getGift } from '../service';
import { CoverImage, ImageHolder, UploadButton } from '../styles';

interface ImageType {
  file: File | string;
  url: string;
}

interface ParamTypes {
  id: string;
  wishlistId: string;
}

const EditGift = () => {
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const [data, setData] = useState({ price: '', title: '' });
  const [showImageModal, setImageModal] = useState(false);
  const [image, setImage] = useState<ImageType>({ file: '', url: '' });

  useEffect(() => {
    (async function () {
      const [err, response]: Array<null | GiftType> = await getGift(id);
      if (err) {
        return err;
      }

      setData({
        price: response!.cost.toString(),
        title: response!.name,
      });

      setImage({
        file: response!.imageURL,
        url: response!.imageURL,
      });
    })();
  }, [id]);

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
    payload.append('image', image.file);

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

export default EditGift;

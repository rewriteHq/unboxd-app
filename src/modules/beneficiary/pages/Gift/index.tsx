import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { NumberFormatValues } from 'react-number-format';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import ImageUploadModal from '../../../../commons/ImageUploadModal';
import PageBottom from '../../../../commons/PageBottom';
import Transaction from '../../../../commons/Transaction';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import PriceInput from '../../../../components/Input/price';
import Tab from '../../../../components/Tab';
import TotalContribution from './components/TotalContribution';
import { addGift } from './redux/actions';
import { CoverImage, ImageWrapper, UploadButton } from './styles';
import { ParamType, ComponentProps, ImageState } from './types';
import API from '../../../../utils/api';

const tabs = ['Edit details', 'Contributors'];
enum tabIndex {
  edit,
  contibutors,
}

const Gift = ({ gifts, getGift }: ComponentProps) => {
  const { id } = useParams<ParamType>();
  const [image, setImage] = useState<ImageState>({
    modal: false,
    file: '',
    url: '',
  });
  const [data, setData] = useState({ price: '', title: '' });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const gift = gifts[id];

    if (gift) {
      setData({
        price: gift.cost.toString(),
        title: gift.name,
      });

      setImage((prev) => ({
        modal: prev.modal,
        file: gift.coverImage,
        url: gift.coverImage,
      }));
    } else {
      getGift(id);
    }
  }, [id, gifts, getGift]);

  const { price, title } = data;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (title.trim().length === 0 || price.trim().length === 0) {
      return toast.error('All fields must be provided');
    }

    const payload = {
      name: title,
      cost: price,
      imageURL: image.url,
    };

    try {
      const { data } = await API.put(`/gift/${id}`, payload);
      return toast.success(data.message);
    } catch (error) {
      return toast.error('Something went wrong');
    }
  };

  const fromGallery = useCallback((file: File) => {
    setImage({ file, url: URL.createObjectURL(file), modal: false });
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage({ file: imageUrl, url: imageUrl, modal: false });
  }, []);

  const toggleImageModal = useCallback(
    () => setImage((prev) => ({ ...prev, modal: !prev.modal })),
    []
  );

  const changePrice = ({ value }: NumberFormatValues) =>
    setData({ ...data, price: value });

  const changeActive = useCallback((tab: number) => setActiveTab(tab), []);

  return (
    <DashboardLayout pageTitle="Add Item" showBack>
      <DashboardContainer>
        {image.url ? (
          <ImageWrapper>
            <CoverImage src={image.url} alt="Cover Image" />
            <UploadButton onClick={toggleImageModal}>Update image</UploadButton>
          </ImageWrapper>
        ) : (
          <ImageWrapper>
            <CoverImage src={gifts[id]?.imageURL} alt="Cover Image" />
            <UploadButton onClick={toggleImageModal}>
              Upload new image
            </UploadButton>
          </ImageWrapper>
        )}
        <Tab active={activeTab} tabs={tabs} change={changeActive} />
        {activeTab === tabIndex.edit && (
          <>
            <form onSubmit={handleSubmit}>
              <Input
                label="What do you need pages"
                value={
                  data.title.charAt(0).toUpperCase() +
                  data.title.slice(1).toLowerCase()
                }
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />

              <PriceInput
                label="Price"
                value={data.price}
                onChange={changePrice}
              />
              <PageBottom>
                <Button>Save</Button>
              </PageBottom>
            </form>
          </>
        )}

        {activeTab === tabIndex.contibutors && (
          <>
            <Transaction />
            <Transaction />
            <Transaction />
          </>
        )}
      </DashboardContainer>
      <ImageUploadModal
        show={image.modal}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={toggleImageModal}
      />

      <PageBottom>
        {activeTab === tabIndex.contibutors && <TotalContribution />}
      </PageBottom>
    </DashboardLayout>
  );
};

const mapStateToProps = (state: any) => ({
  gifts: state.gifts.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getGift: (id: string) => dispatch(addGift(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gift);

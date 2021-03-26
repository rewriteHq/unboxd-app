import React, { useCallback, useEffect, useState } from 'react';
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
import { CoverImage, ImageHolder, ImageWrapper, UploadButton } from './styles';
import { ParamType, ComponentProps, ImageState } from './types';

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
        file: gift.imageURL,
        url: gift.imageURL,
      }));
    } else {
      getGift(id);
    }
  }, [id, gifts, getGift]);

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
            <UploadButton color="white" onClick={toggleImageModal}>
              Upload new
            </UploadButton>
          </ImageWrapper>
        ) : (
          <ImageHolder />
        )}
        <Tab active={activeTab} tabs={tabs} change={changeActive} />
        {activeTab === tabIndex.edit && (
          <>
            <Input
              label="What do you need?"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <PriceInput
              label="Price"
              value={data.price}
              onChange={changePrice}
            />
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
        {activeTab === tabIndex.edit && <Button>Save</Button>}
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

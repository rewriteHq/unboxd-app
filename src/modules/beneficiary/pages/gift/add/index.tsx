import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import PageBottom from '../../../../../commons/PageBottom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import { ImageHolder, UploadButton } from './styles';

const AddGift = () => {
  return (
    <DashboardLayout pageTitle="Add item" showBack>
      <DashboardContainer>
        <ImageHolder>
          <UploadButton>Upload Item Image</UploadButton>
        </ImageHolder>
        <Input label="What do you need?" />
        <Input label="Price" />
      </DashboardContainer>
      <PageBottom>
        <Button>Save</Button>
      </PageBottom>
    </DashboardLayout>
  );
};

export default AddGift;

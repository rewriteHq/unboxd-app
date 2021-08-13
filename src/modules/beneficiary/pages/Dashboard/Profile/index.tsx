import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'store/types';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { SpaceBetween } from '../../../../../commons/UtilityStyles/Flex';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import EditProfileImage from '../components/EditProfileImage';
import { ContentWrapper } from '../styles';

const Profile: React.FC<any> = () => {
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const [profileImage, setProfileImage] = useState<{
    file: File | null;
    result: ArrayBuffer | string | null;
  }>({
    file: null,
    result: null,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      if (e.target.files[0].size > 500000) {
        toast.error('Image size must not be greater than 500KB');
        return;
      }

      reader.onloadend = () => {
        setProfileImage({ file: e.target.files![0], result: reader.result });
      };
    }
  };

  return (
    <DashboardLayout>
      <ContentWrapper>
        <EditProfileImage
          id="edit-image"
          src={profileImage.result as string}
          onChange={handleImageUpload}
        />
        <form>
          <SpaceBetween>
            <Input label="Firstname" disabled={true} value={credentials ? credentials.firstname : "Taofeeqat"} />
            <Input label="Lastname" disabled={true} value={credentials ? credentials.lastname : "Adebayo"} />
          </SpaceBetween>
          <Input label="Phone Number" value={credentials ? credentials.phone : "0803344556677"} />
          <Button>Save changes</Button>
        </form>
      </ContentWrapper>
    </DashboardLayout>
  );
};

export default Profile;

import React, { useState } from 'react';
import { useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<{
    file: File | null;
    result: ArrayBuffer | string | null;
  }>({
    file: null,
    result: null,
  });

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
  });

  useEffect(() => {
    if (credentials) {
      setData({
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        phone: credentials.phone,
      });
    }
  }, [credentials]);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...data,
    };

    console.log('payload data', payload);
  };

  return (
    <DashboardLayout>
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <EditProfileImage
            id="edit-image"
            src={profileImage.result as string}
            onChange={handleImageUpload}
          />
          <SpaceBetween>
            <Input
              label="Firstname"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
            />
            <Input
              label="Lastname"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />
          </SpaceBetween>
          <Input
            label="Phone Number"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <Button loading={loading} disabled={loading}>
            Save changes
          </Button>
        </form>
      </ContentWrapper>
    </DashboardLayout>
  );
};

export default Profile;

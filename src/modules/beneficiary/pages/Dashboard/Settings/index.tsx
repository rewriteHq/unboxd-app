import React from 'react';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import { ContentWrapper, SectionSeparator } from '../styles';
import { ReactComponent as EyeIcon } from '../../../../../assets/img/icons/eye.svg';
import { ReactComponent as EditIcon } from '../../../../../assets/img/icons/edit.svg';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'store/types';

const Settings: React.FC<any> = () => {
  const { loading, credentials } = useSelector((state: GlobalStoreState) => state.user);

  const handleChange = () => {}

  const handleSubmit = () => {}
  return (
    <DashboardLayout>
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={credentials ? credentials.email : 'user@unboxd.gifts'}
            label="Email Address"
            disabled
            callToAction={() => <EditIcon />}
            showCallToAction
            isEdit
            onChange={handleChange}
          />
          <Input
            type="text"
            value={credentials ? credentials.username : 'username'}
            label="Username"
            disabled
            callToAction={() => <EditIcon />}
            showCallToAction
            isEdit
            onChange={handleChange}
          />
          <SectionSeparator />
          <Input
            type="password"
            value="tao_23293@gmail.com"
            label="Old Password"
            callToAction={() => <EyeIcon />}
            showCallToAction
            isPassword
            onChange={handleChange}
          />
          <Input
            type="password"
            value="tao_23293@gmail.com"
            label="New Password"
            callToAction={() => <EyeIcon />}
            showCallToAction
            isPassword
            onChange={handleChange}
          />
          <Input
            type="Confirm new password"
            value="tao_23293@gmail.com"
            label="Password"
            callToAction={() => <EyeIcon />}
            showCallToAction
            isPassword
            onChange={handleChange}
          />
          <Button type="submit" loading={loading} disabled={loading}>Save changes</Button>
        </form>
      </ContentWrapper>
    </DashboardLayout>
  );
};

export default Settings;

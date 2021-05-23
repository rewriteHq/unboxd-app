import React from 'react';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import { ContentWrapper, SectionSeparator } from '../styles';
import { ReactComponent as EyeIcon } from '../../../../../assets/img/icons/eye.svg';

const Settings: React.FC<any> = () => {
  return (
    <DashboardLayout>
      <ContentWrapper>
        <form>
          <Input
            type="email"
            value="tao_23293@gmail.com"
            label="Email Address"
            disabled
          />
          <Input
            type="password"
            value="tao_23293@gmail.com"
            label="Password"
            disabled
          />
          <SectionSeparator />
          <Input
            type="password"
            value="tao_23293@gmail.com"
            label="Old Password"
            callToAction={() => <EyeIcon />}
            showCallToAction
            isPassword
          />
          <Input
            type="password"
            value="tao_23293@gmail.com"
            label="New Password"
            callToAction={() => <EyeIcon />}
            showCallToAction
            isPassword
          />
          <Input
            type="Confirm new password"
            value="tao_23293@gmail.com"
            label="Password"
            callToAction={() => <EyeIcon />}
            showCallToAction
            isPassword
          />
          <Button>Save changes</Button>
        </form>
      </ContentWrapper>
    </DashboardLayout>
  );
};

export default Settings;

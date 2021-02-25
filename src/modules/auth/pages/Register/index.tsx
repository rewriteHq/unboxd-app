import { useState } from 'react';
import { IRegisterState } from './types';
import { Form, FooterText } from './styles';
import Input from '../../../../components/Input';
import Layout from '../../../../Layout';
import { PageHeadingSmall } from '../../../../commons/Heading';
import Button from '../../../../components/Button';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import API from '../../../../utils/api';
import Notify from '../../../../utils/notify/notify';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();

  const onHandleSubmit = async (restFormData: IRegisterState, event: any) => {
    event.preventDefault();

    setLoading(true);
    restFormData.signType = 'direct';

    try {
      const response = await API.post('/auth/signup', restFormData);

      Notify.bottom(response.data.message);

      setTimeout(() => history.push('/login'), 500);
    } catch (err) {
      const message = err.response.data.message;
      Notify.bottom(message ? message : 'Something happened. Kindly try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <PageHeadingSmall className="text-center">
          Create an account to continue
        </PageHeadingSmall>
        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <Input
            label="First name"
            type="text"
            name="firstname"
            error={errors}
            register={register}
            require="true"
          />
          <Input
            label="Last name"
            type="text"
            name="lastname"
            error={errors}
            register={register}
            require="true"
          />
          <Input
            label="Email address"
            type="text"
            name="email"
            error={errors}
            register={register}
            require="true"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            error={errors}
            register={register}
            require="true"
          />
          <Button loading={loading} disabled={loading}>
            Create account
          </Button>
        </Form>
      </div>
      <FooterText>
        <div className="info">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </FooterText>
    </Layout>
  );
};

export default Register;

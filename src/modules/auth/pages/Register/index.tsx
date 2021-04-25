import { useState } from 'react';
import { IRegisterState } from './types';
import { Form, FooterText } from './styles';
import Input from '../../../../components/Input';
import Layout from '../../../../Layout';
import Button from '../../../../components/Button';
import { Link, useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import API from '../../../../utils/api';
import Notify from '../../../../utils/notify/notify';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { Auth } from '../../../../components/Header/styles';

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

      setTimeout(() => history.push('/event/create'), 500);
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
        <SpaceBetween align="center">
          <h2>Sign up</h2>
          <Auth>
            Got account? <Link to="/login">Sign in</Link>
          </Auth>
        </SpaceBetween>

        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <SpaceBetween>
            <div className="marg-r">
              <Input
                label="First name"
                type="text"
                name="firstname"
                error={errors}
                register={register}
                required
              />
            </div>

            <Input
              label="Last name"
              type="text"
              name="lastname"
              error={errors}
              register={register}
              required
            />
          </SpaceBetween>

          <Input
            label="Email address"
            type="text"
            name="email"
            error={errors}
            register={register}
            required
          />
          <Input
            label="Phone number"
            type="number"
            name="phone"
            error={errors}
            register={register}
            required
          />
          <Input
            label="Password"
            type="password"
            name="password"
            error={errors}
            register={register}
            required
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

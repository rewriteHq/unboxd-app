import { useState } from 'react';
import { IRegisterState } from './types';
import { Form, FooterText } from './styles';
import Input from '../../../../components/Input';
import Layout from '../../../../Layout';
import { PageHeadingSmall } from '../../../../commons/Heading';
import Button from '../../../../components/Button';
import { useHistory } from 'react-router-dom';
import * as API from '../../../../utils/api/service';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles

import { useForm } from 'react-hook-form';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();

  console.log(process.env);

  const onHandleSubmit = async (restFormData: IRegisterState, event: any) => {
    event.preventDefault();

    setLoading(true);
    console.log(restFormData);

    try {
      const response = await API.postReq(
        '/auth/signup',
        restFormData,
        (res) => console.log(res),
        (err) => console.log(err)
      );

      // toaster.notify(response.data.message, {
      //   position: 'bottom',
      //   duration: 5000,
      // });
      // setUser((prevUser) => ({ ...prevUser, ...response.data.payload }));
      // history.push('/login');
    } catch ({ message }) {
      toaster.notify(
        message ? message : 'Something happened. Kindly try again',
        {
          position: 'bottom',
          duration: 5000,
        }
      );
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
            require={true}
          />
          <Input
            label="Last name"
            type="text"
            name="lastname"
            error={errors}
            register={register}
            require={true}
          />
          <Input
            label="Email address"
            type="text"
            name="email"
            error={errors}
            register={register}
            require={true}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            error={errors}
            register={register}
            require={true}
          />
          <Button loading={loading}>Create account</Button>
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

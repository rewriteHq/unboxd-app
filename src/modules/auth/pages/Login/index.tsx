import { Form, Main } from './styles';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Layout from '../../../../Layout';
import { PageHeadingSmall } from '../../../../commons/Heading';
import { loginUser } from './redux/actions';

const Login = (props: any) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {});

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //your client side validation here
    //after success validation
    const userData = {
      email: values.email,
      password: values.password,
    };

    const result = await props.loginHandler(userData, props.history);

    console.log(result);
  };

  return (
    <Layout>
      <Main>
        <div className="container">
          <PageHeadingSmall className="text-center">
            Sign in to continue
          </PageHeadingSmall>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="text"
              name="email"
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <Button loading={props.loading} disabled={props.loading}>
              Login
            </Button>
          </Form>
        </div>
      </Main>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  loginHandler: async (payload: any, history: any) =>
    dispatch(loginUser(payload, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

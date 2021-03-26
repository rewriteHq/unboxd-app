import { Form, Main } from './styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Layout from '../../../../Layout';
import { loginUser } from './redux/actions';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { Auth } from '../../../../components/Header/styles';

const Login = (props: any) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

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

    await props.loginHandler(userData, props.history);
  };

  return (
    <Layout>
      <Main>
        <div className="container">
          <SpaceBetween align="center">
            <h2>Sign in</h2>
            <Auth>
              New here? <Link to="/register">Sign up</Link>
            </Auth>
          </SpaceBetween>
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
            <Button type="submit">Login</Button>
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

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AuthDescriptionFooter,
  AuthDescriptionHeader,
  Form,
  Main,
  MainContainer,
} from './styles';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Layout from '../../../../Layout';
import { loginUser } from './redux/actions';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { Auth } from '../../../../components/Header/styles';
import SocialAuth from '../../../../components/SocialAuth';
import { ReactComponent as GoogleIcon } from '../../../../assets/img/illustrations/google.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/img/illustrations/facebook.svg';
import Footer from '../../../../components/Footer';
import Logo from '../../../../components/Logo';
import Header from '../../pages/Home/header';
import { ReactComponent as LargeHeart } from '../../../../assets/img/illustrations/heart-large.svg';
import { ReactComponent as SmallHeart } from '../../../../assets/img/illustrations/heart-small.svg';

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
    <MainContainer>
      <div className="header">
        <Header />
      </div>
      <div className="description">
        <LargeHeart className="large-heart" />
        <SmallHeart className="small-heart" />
        <AuthDescriptionHeader>
          <Link to="/">
            <Logo />
          </Link>
        </AuthDescriptionHeader>
        <AuthDescriptionFooter>
          <h1>Whatever you want</h1>
          <p>
            List it, share it and receive money contributions
            <br /> from your loved ones.
          </p>
        </AuthDescriptionFooter>
      </div>
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
                id="email"
                onChange={handleChange}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
              <Button type="submit">Sign in</Button>
            </Form>
            <SocialAuth
              options={[
                {
                  text: 'Sign in with Google',
                  onClick: (e) => {
                    console.log(e);
                  },
                  icon: GoogleIcon,
                },
                {
                  text: 'Signin with Facebook',
                  onClick: (e) => {
                    console.log(e);
                  },
                  icon: FacebookIcon,
                },
              ]}
            />
          </div>
        </Main>
        <Footer />
      </Layout>
    </MainContainer>
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

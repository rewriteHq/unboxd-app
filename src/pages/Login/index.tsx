import { useState, useEffect } from 'react';
import { Main, Form } from './styles';
import Input from '../../components/Input';
import Layout from '../../Layout';
import Button from '../../components/Button';

import { connect, useDispatch } from 'react-redux';
import { loginUser } from './redux/actions';

import { PageHeadingSmall } from '../../commons/Heading';

const Login = (props: any) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {

  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    //your client side validation here
    //after success validation
    const userData = {
      email: values.email,
      password: values.password,
    };

    const result = await props.loginHandler(userData, props.history);

    console.log(result);
  }

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
            <Button>Login</Button>
          </Form>
        </div>
      </Main>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  user: state.user;
};

const mapDispatchToProps = (dispatch: any) => {
  loginHandler: (payload: any, history: any) =>
    dispatch(loginUser(payload, history));
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

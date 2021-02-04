import { Main, Form } from './styles';
import Input from '../../components/Input';
import Layout from '../../Layout';
import Button from '../../components/Button';

import { PageHeadingSmall } from '../../commons/Heading';

const Login = () => {
  return (
    <Layout>
      <Main>
        <div className="container">
          <PageHeadingSmall className="text-center">
            Sign in to continue
          </PageHeadingSmall>
          <Form>
            <Input label="Email address" type="text" name="email" />
            <Input label="Password" type="password" name="password" />
            <Button>Login</Button>
          </Form>
        </div>
      </Main>
    </Layout>
  );
};

export default Login;

import { Main, Form } from './styles';
import Input from '../../components/Input';
import Layout from '../../Layout';
import Button from '../../components/Button';

import { PageHeading } from '../../commons/Heading';

const Register = () => {
  return (
    <Layout>
      <Main>
        <div className="container">
          <PageHeading>Create an account to continue</PageHeading>
          <Form>
            <Input label="First name" type="text" name="firstname" />
            <Input label="Last name" type="text" name="lastname" />
            <Input label="Email address" type="text" name="email" />
            <Input label="Password" type="password" name="password" />
            <Button>Create account</Button>
          </Form>
        </div>
      </Main>
    </Layout>
  );
};

export default Register;

import { Main, Form } from './styles';
import Input from '../../components/Input';
import Layout from '../../Layout';
import Button from '../../components/Button';

import { PageHeadingSmall } from '../../commons/Heading';

const Register = () => {
  return (
    <Layout>
      <Main>
        <div className="container">
          <Form>
            <PageHeadingSmall className="text-center">
              Create an account to continue
            </PageHeadingSmall>
            
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

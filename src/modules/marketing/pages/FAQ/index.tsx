import { lazy } from 'react';
import { PageHeading } from 'commons/Heading';
import { Paragraph } from '../../../auth/pages/Home/styles';

const Layout = lazy(() => import('../../../../Layout'));


const Faq = () => {

  // const steps = [
  //   "Create a list with pictures of items you want",
  //   "Share with loved ones",
  //   "Receive part or full contributions"
  // ];

  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Frequently Asked Questions
        </PageHeading>
        <Paragraph className="text-center">
          List it, share it, and receive cash contributions from your loved
          ones.
        </Paragraph>
        </div>
    </Layout>
  );
};

export default Faq;

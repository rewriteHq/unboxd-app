import { Route, RouteProps } from 'react-router';
import { LazyComponent } from './types';

interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  header?: LazyComponent;
  footer?: LazyComponent;
  rest?: any;
}

const PublicRoutes: React.FC<MyRouteProps> = ({
  component: Component,
  header: Header,
  footer: Footer,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {Header && <Header />}
          <Component {...props} />
          {Footer && <Footer />}
        </>
      )}
    />
  );
};

export default PublicRoutes;

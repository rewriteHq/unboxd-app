import { Route, RouteProps } from 'react-router';
import { LazyComponent } from './types';

interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  header?: LazyComponent;
  rest?: any;
}

const PublicRoutes: React.FC<MyRouteProps> = ({
  component: Component,
  header: Header,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {Header && <Header />}
          <Component {...props} />
        </>
      )}
    />
  );
};

export default PublicRoutes;

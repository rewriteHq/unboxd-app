import { Route, RouteProps } from 'react-router';
import { LazyComponent } from './types';

interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  rest?: any;
}

const PublicRoutes: React.FC<MyRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoutes;

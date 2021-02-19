import { Route, RouteProps } from 'react-router';

interface MyRouteProps extends RouteProps {
  component: any;
  rest?: any;
}

const PublicRoutes: React.FC<MyRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoutes;

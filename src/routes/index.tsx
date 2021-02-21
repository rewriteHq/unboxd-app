import { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from './routes';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoutes';

/**
 * Creates an array of routes distinguished into
 * authenticated or unauthenticated.
 */
const routesArray = routes.map((route) =>
  route.auth ? (
    <PrivateRoutes key={route.path} {...route} />
  ) : (
    <PublicRoutes key={route.path} {...route} />
  )
);

const RoutesHandler: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routesArray}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RoutesHandler;

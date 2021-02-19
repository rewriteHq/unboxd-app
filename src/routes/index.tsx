import { Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from './routes';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoutes';

const RoutesHandler: React.FC = () => {
  /**
   * Creates an array of routes distinguished into
   * authenticated or not.
   *
   * Memoized to prevent rerender on store update
   */

  const renderRoutes = useMemo(() => {
    return routes.map((route) =>
      route.auth ? (
        <PrivateRoutes key={route.path} {...route} />
      ) : (
        <PublicRoutes key={route.path} {...route} />
      )
    );
  }, []);

  return (
    <Router>
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Switch>
          {renderRoutes}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RoutesHandler;

//in PrivateRoute.tsx
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { LazyComponent } from './types';
interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  authenticated: boolean;
  rest?: any;
}

const PrivateRoute: React.FC<MyRouteProps> = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});
export default connect(mapStateToProps)(PrivateRoute);

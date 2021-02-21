//in PrivateRoute.tsx
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { LazyComponent } from './types';
interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  authenticated: boolean;
  header?: LazyComponent;
  rest?: any;
}

const PrivateRoute: React.FC<MyRouteProps> = ({
  component: Component,
  header: Header,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? (
        <>
          {Header && <Header />}
          <Component {...props} />
        </>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});
export default connect(mapStateToProps)(PrivateRoute);

import { Suspense, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from './commons/Loader';
import { checkAuth } from './modules/auth/pages/Login/redux/actions';
import RoutesHandler from './routes';
import AppState from './typings';

interface ComponentProps {
  checkAuthenticated: () => void;
  loadingUI: boolean;
}

const App: React.FC<ComponentProps> = ({ checkAuthenticated, loadingUI }) => {
  const componentHasMounted = useRef(false);
  useEffect(() => {
    if (!componentHasMounted.current) {
      checkAuthenticated();
      componentHasMounted.current = true;
    }
  }, [checkAuthenticated]);

  console.log(loadingUI);

  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Router>
        <Switch>
          <RoutesHandler />
        </Switch>
      </Router>
      <Loader show={loadingUI} />
    </Suspense>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    loadingUI: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  checkAuthenticated: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { checkAuth } from './modules/auth/pages/Login/redux/actions';
import RoutesHandler from './routes';

interface ComponentProps {
  checkAuthenticated: () => void;
}

const App: React.FC<ComponentProps> = ({ checkAuthenticated }) => {
  checkAuthenticated();

  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Router>
        <Switch>
          <RoutesHandler />
        </Switch>
      </Router>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  checkAuthenticated: () => dispatch(checkAuth()),
});

export default connect(null, mapDispatchToProps)(App);

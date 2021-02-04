import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Event = lazy(() => import('./pages/Event'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/create-account" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/event" component={Event} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

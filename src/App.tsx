import { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RoutesHandler from './routes';

function App() {
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/create-account" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/event" component={Event} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route component={NotFound} /> */}
          <RoutesHandler />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

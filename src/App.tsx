import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLoader from './commons/PageLoader';

const HomePage = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

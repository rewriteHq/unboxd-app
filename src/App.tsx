import { Suspense, lazy, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import appThemes from './AppTheme';
import { checkAuth, logoutUser } from './modules/auth/pages/Login/redux/actions';
import RoutesHandler from './routes';
import { useAppThemeContext } from './store/ThemeContex';
import IdleTimer from './utils/idleTimer';

const Loader = lazy(() => import('./components/PageLoader'));

interface ComponentProps {
  checkAuthenticated: () => void;
}

const App: React.FC<ComponentProps> = ({ checkAuthenticated }) => {
  const appThemeContext = useAppThemeContext();
  const GlobalStyle = createGlobalStyle`
    body {
      background: ${(props) => props.theme.appSecondaryColor}
    }
  `;
  checkAuthenticated();

  const [isTimeout, setIsTimeout] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 10, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        //do something if expired on load
        setIsTimeout(true);
      }
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <Suspense fallback={() => <Loader />}>
      <ThemeProvider theme={appThemes[appThemeContext?.theme!]}>
        <GlobalStyle />
        <Router>
          <Switch>
            <RoutesHandler />
          </Switch>
        </Router>
        {isTimeout && dispatch(logoutUser())}
      </ThemeProvider>
      <Toaster />
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  checkAuthenticated: () => dispatch(checkAuth()),
});

export default connect(null, mapDispatchToProps)(App);

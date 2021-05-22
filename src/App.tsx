import { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import appThemes from './AppTheme';
import { checkAuth } from './modules/auth/pages/Login/redux/actions';
import RoutesHandler from './routes';
import { useAppThemeContext } from './store/ThemeContex';

interface ComponentProps {
  checkAuthenticated: () => void;
}

const App: React.FC<ComponentProps> = ({ checkAuthenticated }) => {
  const appThemeContext = useAppThemeContext();
  const GlobalStyle = createGlobalStyle`
    body {
      background: ${(props) => props.theme.appPrimaryColor}
    }
  `;
  checkAuthenticated();

  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <ThemeProvider theme={appThemes[appThemeContext?.theme!]}>
        <GlobalStyle />
        <Router>
          <Switch>
            <RoutesHandler />
          </Switch>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  checkAuthenticated: () => dispatch(checkAuth()),
});

export default connect(null, mapDispatchToProps)(App);

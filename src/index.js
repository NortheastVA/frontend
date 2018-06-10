import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from 'components/Header';
import LoginPage from 'pages/LoginPage';
import RoutePage from 'pages/RoutePage';

// import { fetchAuth } from './ducks/auth';
import configureStore from './store/configureStore';
import SnackBarNotifier from './components/SnackBarNotifier';

const store = configureStore();
// store.dispatch(fetchAuth());

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0'
    },
    secondary: {
      main: '#ef6c00'
    }
  }
});

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/route/:id" component={RoutePage} />
            </Switch>
          </BrowserRouter>
          <SnackBarNotifier />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));

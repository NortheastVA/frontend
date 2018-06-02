import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Layout from 'pages/layout';

// import { fetchAuth } from './ducks/auth';
import configureStore from './store/configureStore';

const store = configureStore();
// store.dispatch(fetchAuth());

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#ef6c00',
    },
  },
});

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));

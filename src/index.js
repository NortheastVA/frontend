import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import { Provider } from 'react-redux';
import 'babel-polyfill';

// import { fetchAuth } from './ducks/auth';

import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.css';
import Layout from './components/layout';

const store = configureStore();
// store.dispatch(fetchAuth());

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));

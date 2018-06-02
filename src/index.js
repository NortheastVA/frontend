import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import { Provider } from 'react-redux';

// import { fetchAuth } from './ducks/auth';
import 'semantic-ui-css/semantic.css';
import configureStore from './store/configureStore';
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

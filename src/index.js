import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import { Provider } from 'react-redux';

// import { fetchAuth } from './ducks/auth';
import configureStore from './store/configureStore';

const store = configureStore();
// store.dispatch(fetchAuth());

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store} />
    );
  }
}

render(<App />, document.getElementById('app'));

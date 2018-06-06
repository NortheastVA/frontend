import { combineReducers } from 'redux';
import login from './login';
import notifications from './notifications';

const app = combineReducers({
  login,
  notifications
});

export default app;

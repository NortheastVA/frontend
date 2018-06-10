import { combineReducers } from 'redux';
import login from './login';
import notifications from './notifications';
import route from './route';

const app = combineReducers({
  login,
  notifications,
  route
});

export default app;

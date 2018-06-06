import { fork } from 'redux-saga/effects';
import { attemptLoginSaga } from 'ducks/login';
import { closeSnackSaga } from 'ducks/notifications';

export default function* rootSaga() {
  yield [fork(attemptLoginSaga), fork(closeSnackSaga)];
}

import { fork } from 'redux-saga/effects';
import { attemptLoginSaga } from 'ducks/login';
import { closeSnackSaga } from 'ducks/notifications';
import { getRouteSaga } from 'ducks/route';

export default function* rootSaga() {
  yield [fork(attemptLoginSaga), fork(closeSnackSaga), fork(getRouteSaga)];
}

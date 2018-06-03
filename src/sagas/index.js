import { fork } from 'redux-saga/effects';
import { attemptLoginSaga } from 'ducks/login';

export default function* rootSaga() {
  yield [fork(attemptLoginSaga)];
}

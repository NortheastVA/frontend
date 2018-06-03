import request from 'utils/request';
import { takeEvery, call, put } from 'redux-saga/effects';

// Actions
const LOGIN = 'nee/login/LOGIN';
const LOGIN_SUCCEEDED = 'nee/login/LOGIN_SUCCEEDED';
const LOGIN_FAILED = 'nee/login/LOGIN_FAILED';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Action Creators
export function attemptLogin(username, password) {
  return { type: LOGIN, username, password };
}

// Sagas
export function* attemptLoginSaga() {
  yield takeEvery(LOGIN, getLogin);
}

export function* getLogin(action) {
  const { username, password } = action;

  try {
    yield call(
      request.get,
      `/auth/login?username=${username}&password=${password}&token`
    );
    yield put({ type: LOGIN_SUCCEEDED });
  } catch (e) {
    yield put({
      type: LOGIN_FAILED
    });
  }
}

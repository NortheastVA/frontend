import { take, put, fork, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';

// Actions
const SHOW_SNACK = 'nee/notification/SHOW_SNACK';
const CLOSE_SNACK = 'nee/notification/CLOSE_SNACK';

// Reducer
export default function reducer(
  state = {
    showSnack: false,
    snackText: ''
  },
  action = {}
) {
  switch (action.type) {
    case SHOW_SNACK:
      return {
        ...state,
        showSnack: true,
        snackText: action.text
      };
    case CLOSE_SNACK:
      return {
        ...state,
        showSnack: false,
        snackText: ''
      };
    default:
      return state;
  }
}

// Action Creators
export function showSnack(text) {
  return { type: SHOW_SNACK, text };
}

export function closeSnack() {
  return { type: CLOSE_SNACK };
}

// Sagas
export function* closeSnackSaga() {
  while (yield take(SHOW_SNACK)) {
    // starts the task in the background
    const bgCloseSnackTask = yield fork(removeSnackTask);

    // wait for the user stop action
    yield take(CLOSE_SNACK);
    // user clicked stop. cancel the background task
    // this will cause the forked bgSync task to jump into its finally block
    yield cancel(bgCloseSnackTask);
  }
}

function* removeSnackTask() {
  while (true) {
    yield delay(5000);
    yield put({ type: CLOSE_SNACK });
  }
}

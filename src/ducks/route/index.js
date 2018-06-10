import request from 'utils/request';
import { takeEvery, call, put } from 'redux-saga/effects';
import { showSnack } from 'ducks/notifications';

// Actions
const GET_ROUTE = 'nee/route/GET_ROUTE';
const GET_ROUTE_SUCCEEDED = 'nee/route/GET_ROUTE_SUCCEEDED';
const GET_ROUTE_FAILED = 'nee/route/GET_ROUTE_FAILED';

// Reducer
export default function reducer(
  state = {
    isLoading: false,
    route: null
  },
  action = {}
) {
  switch (action.type) {
    case GET_ROUTE:
      return {
        ...state,
        isLoading: true
      };
    case GET_ROUTE_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        route: action.route
      };
    case GET_ROUTE_FAILED:
      return {
        ...state,
        isLoading: false,
        route: null
      };
    default:
      return state;
  }
}

// Action Creators
export function getRoute(id) {
  return { type: GET_ROUTE, id };
}

// Sagas
export function* getRouteSaga() {
  yield takeEvery(GET_ROUTE, fetchRoute);
}

export function* fetchRoute(action) {
  const { id } = action;

  try {
    const response = yield call(request.get, `/data/route/${id}`);
    yield put({ type: GET_ROUTE_SUCCEEDED, route: response.data.data[0] });
  } catch (e) {
    yield put({
      type: GET_ROUTE_FAILED
    });
    yield put(showSnack('Unable to find route'));
  }
}

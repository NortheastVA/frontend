const fetchFailed = 'AUTH/FETCH_FAILED';
const fetchSet = 'AUTH/FETCH_SET';
const authFetch = 'AUTH/FETCH';

export const fetchAuthFailed = () => ({
  type: fetchFailed
});

export const setAuthData = payload => ({
  type: fetchSet,
  payload
});

export const fetchAuth = () => ({
  type: authFetch
});

export default (state = { info: [], loading: false }, action = {}) => {
  switch (action.type) {
    case authFetch:
    case fetchFailed:
      return {
        ...state,
        loading: true,
        info: null
      };
    case fetchSet:
      return {
        ...state,
        loading: false,
        info: action.payload
      };
    default:
      return state;
  }
};

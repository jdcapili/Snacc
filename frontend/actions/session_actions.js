import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

//reg action creators
export const receiveCurrentUser = (user) => (
  {
    type: RECEIVE_CURRENT_USER,
    user
  }
);

export const logoutCurrentUser = () => (
  {
    type: LOGOUT_CURRENT_USER,
  }
);

// Receive errors will take in an array
export const receiveErrors = (errors) => (
  {
    type: RECEIVE_ERRORS,
    errors
  }
);

//thunk actions

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user)
  .then(payload => 
    dispatch(receiveCurrentUser(payload)))
}

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user)
  .then(payload => 
    dispatch(receiveCurrentUser(payload)))
}

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
  .then(() => 
    dispatch(receiveCurrentUser()))
}
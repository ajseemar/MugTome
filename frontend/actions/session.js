import * as SessionAPI from '../utils/session_api';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECIEIVE_SESSION_ERRORS = "RECIEIVE_SESSION_ERRORS";

const receiveUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER,
    user: { id: null }
});

export const receiveErrors = errors => ({
    type: RECIEIVE_ERRORS,
    errors
});

export const login = (user) => dispatch => SessionAPI.login(user)
    .then(user => dispatch(receiveUser(user)));

export const signup = (user) => dispatch => SessionAPI.signup(user)
    .then(user => dispatch(receiveUser(user)));

export const logout = () => dispatch => SessionAPI.logout()
    .then(() => dispatch(logoutUser()));
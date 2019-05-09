import * as UsersAPI from '../utils/users_api';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const requestUser = (id) => dispatch => (
    UsersAPI.requestUser(id)
        .then((user) => dispatch(receiveUser(user)))
);
import { RECEIVE_CURRENT_USER, RECEIVE_SESSIONn_ERRORS } from '../actions/session';

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return state;
    }
}

export default SessionErrorsReducer;
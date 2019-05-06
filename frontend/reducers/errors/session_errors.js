import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../../actions/session';

const SessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
        debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
        debugger
            return {};
        default:
            return state;
    }
}

export default SessionErrorsReducer;
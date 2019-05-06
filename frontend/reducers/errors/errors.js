import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer
});

export default ErrorsReducer;
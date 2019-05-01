import { combineReducers } from "redux";
import EntitiesReducer from "./entities";
import SessionReducer from "./session";
import ErrorsReducer from "./errors";

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer
});
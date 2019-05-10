import { combineReducers } from "redux";
import EntitiesReducer from "./entities/entities";
import SessionReducer from "./session";
import ErrorsReducer from "./errors/errors";
import UIReducer from "./ui/ui";

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui: UIReducer
});
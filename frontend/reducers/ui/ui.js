import { combineReducers } from "redux";
import ModalReducer from "./modal";

const UIReducer = combineReducers ({
    modal: ModalReducer
});

export default UIReducer;
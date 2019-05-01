import { createStore, applyMiddleware } from "redux";

import RootReducer from '../reducers/root';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;
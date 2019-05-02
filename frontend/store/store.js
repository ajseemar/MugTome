import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import RootReducer from '../reducers/root';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
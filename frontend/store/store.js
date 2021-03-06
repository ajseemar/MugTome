import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import RootReducer from '../reducers/root';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger];
    }
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middleware)
        );
    };

export default configureStore;
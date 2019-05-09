import { combineReducers } from 'redux';

import UsersReducer from './users';
import PostsReducer from './posts';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer
});

export default EntitiesReducer;
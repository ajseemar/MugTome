import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import {logout} from './actions/session';

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};
    if (window.window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            errors: {
                session: []
            },
            session: {
                id: window.currentUser.id
            }
        };
        delete window.currentUser;
    }
    const store = configureStore(preloadedState);
    
    // 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    // 

    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
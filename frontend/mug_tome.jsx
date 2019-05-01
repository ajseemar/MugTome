import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionAPI from './utils/session_api';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = SessionAPI.signup;
    ReactDOM.render(<h1>MugTome</h1>, document.getElementById('root'));
});
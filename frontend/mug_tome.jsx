import React from 'react';
import ReactDOM from 'react-dom';

import { signup } from './actions/session';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    ReactDOM.render(<h1>MugTome</h1>, document.getElementById('root'));
});
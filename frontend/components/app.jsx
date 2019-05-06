import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Splash from './splash';
import HomeContainer from './home_container';
import ProfileContainer from './profile_container';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import NavbarContainer from './navbar_container';

const App = () => (
    <div id='app-container'>
        <ProtectedRoute path="/users" component={NavbarContainer} />
        <Switch>
            <AuthRoute exact path="/welcome" component={Splash} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <ProtectedRoute path="/users/:user_fn/:user_ln/:id" component={ProfileContainer} />
            <Redirect to='/welcome' />
        </Switch>

    </div>
);

export default App;
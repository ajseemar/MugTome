import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Splash from './splash';
import HomeContainer from './home_container';
import { AuthRoute, ProtectedRoute } from '../utils/route';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/welcome" component={Splash} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <Redirect to='/welcome' />
        </Switch>

    </div>
);

export default App;
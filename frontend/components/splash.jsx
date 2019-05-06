import React from 'react';

import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

const Splash = props => (
    <div className='splash-container'>
        <header>
            <div className='header-content'>
                <h1>mugtome</h1>
                <LoginFormContainer />
            </div>
        </header>
        <main>
            <section id='recent-logins'>
                <h2>Recent Logins</h2>
                <h6>Click your picture or add an account.</h6>
            </section>

            <section id='signup-form'>
                <h2>Create a New Account</h2>
                <h6>It's free and always will be.</h6>
                <SignupFormContainer />
            </section>
        </main>

        <footer>
            
        </footer>
    </div>
);

export default Splash;
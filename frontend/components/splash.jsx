import React from 'react';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const Splash = props => {
    // debugger
    return (
    <div className='welcome-container'>
        <header>
            <h1>mugtome</h1>
            <LoginFormContainer />
        </header>
        <main>
            <section id='recent-logins'>
                <h2>Recent Logins</h2>
                <h6>click your picture or add an account.</h6>
            </section>

            <section id='signup-form'>
                <h2>Create a New Account</h2>
                <h6>It's free and always will be.</h6>
                <SignupFormContainer />
            </section>
        </main>
    </div>
)};

export default Splash;
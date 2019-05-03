import React from 'react';

class SessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.populateState();
    }

    populateState () {
        this.state = (this.props.formType === 'Sign Up') ? {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            gender: "",
            password: ""
        } : {
                email: "",
                password: ""
        };
    }

    handleInput (field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }
    
    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm({user: this.state});
        this.populateState();
    }

    demoLogin (e) {
        e.preventDefault();
        this.props.processForm({
            user: {
                email: 'email@domain.com',
                password: 'password'
            }
        })
    }

    renderSignUpForm () {
        return (
            <form className='signup-form' onSubmit={this.handleSubmit.bind(this)}>
                <div className="name-input-fields">
                    <input id="first-name" placeholder="First name" type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    <input id="last-name" placeholder="Last name" type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                </div>
                
                <div className="email-input-field">
                    <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                </div>
                <div className="password-input-field">
                    <input placeholder="New password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                </div>
                
                <div className="birthday-input-field">
                    <label htmlFor="birthday">Birthday</label>
                    <input id="birthday" type="date" value={this.state.date_of_birth} onChange={this.handleInput("date_of_birth")} />
                </div>

                <div className="gender-input-field">
                    <label>
                        <input type="radio" value='Female' onChange={this.handleInput("gender")} />Female
                        </label>
                    <label>
                        <input type="radio" value='Male' onChange={this.handleInput("gender")} />Male
                    </label>
                </div>
                <div className="button">
                    <button className="signup-button">{this.props.formType}</button>
                </div>
            </form>
        );
    }

    renderLogInForm () {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                </div>
                <div className="buttons">
                    <button className='demo-login-button' onClick={this.demoLogin.bind(this)}>Demo Login</button>
                    <button className='login-button'>{this.props.formType}</button>
                </div>
            </form>
        )
    }

    render () {
        if (this.props.formType === 'Sign Up') return this.renderSignUpForm();
        else return this.renderLogInForm();
    }
}

export default SessionForm;
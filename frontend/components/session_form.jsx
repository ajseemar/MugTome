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

    renderSignUpForm () {
        return (
            <form className='signup-form' onSubmit={this.handleSubmit.bind(this)}>
                <input placeholder="First name" type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                <input placeholder="Last name" type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                <input placeholder="New password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                <label htmlFor="birthday">Birthday</label>
                <input id="birthday" type="date" value={this.state.date_of_birth} onChange={this.handleInput("date_of_birth")} />
                <label>
                    <input type="radio" value='Female' onChange={this.handleInput("gender")} />Female
                    </label>
                <label>
                    <input type="radio" value='Male' onChange={this.handleInput("gender")} />Male
                    </label>
                <input type="submit" value={this.props.formType} />
            </form>
        );
    }

    renderLogInForm () {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="email">Email</label>
                <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                <input type="submit" value={this.props.formType} />
            </form>
        )
    }

    render () {
        if (this.props.formType === 'Sign Up') return this.renderSignUpForm();
        else return this.renderLogInForm();
    }
}

export default SessionForm;
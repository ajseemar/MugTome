import { connect } from 'react-redux';

import { login } from '../actions/session';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors,
    formType: 'Log In'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
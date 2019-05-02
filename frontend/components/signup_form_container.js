import { connect } from 'react-redux';

import { signup } from '../actions/session';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors,
    formType: 'Sign Up'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
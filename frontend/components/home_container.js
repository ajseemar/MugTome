import { connect } from 'react-redux';

import Home from "./home";
import { logout } from '../actions/session';

const msp = state => {
    // debugger
    return ({
    user: state.entities.users[state.session.id]
});}

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Home);
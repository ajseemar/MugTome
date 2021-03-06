import { connect } from 'react-redux';

import Home from "./home";
import { logout } from '../actions/session';

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(Home);
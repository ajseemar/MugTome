import { connect } from 'react-redux';

import Navbar from "./navbar";

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(Navbar);
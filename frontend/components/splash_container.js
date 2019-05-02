import { connect } from "react-redux";
import Splash from "./splash";

const msp = ({users, session}) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    signup: () => dispatch(signup())
});

export default connect(msp, mdp)(Splash);
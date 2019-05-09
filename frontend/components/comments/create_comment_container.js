import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(CreateCommentForm);
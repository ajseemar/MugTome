import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createPost } from '../../actions/posts';
import CreatePostForm from './create_post_form';

const msp = (state, ownProps) => ({
    post: {
        body: "",
        friend_id: ownProps.match.params.id
    },
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    createPost: (post) => dispatch(createPost(post))
});

export default withRouter(connect(msp, mdp)(CreatePostForm));
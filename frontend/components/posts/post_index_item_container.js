import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndexItem from './post_index_item';
import { requestUser } from '../../actions/users';
import { deletePost } from '../../actions/posts';

const msp = (state, ownProps) => {
    let timelineOwner = null;
    if (ownProps.post.user_id != ownProps.post.friend_id) timelineOwner = state.entities.users[ownProps.post.friend_id];
    return ({
        postOwner: state.entities.users[ownProps.post.user_id],
        user: state.entities.users[state.session.id],
        timelineOwner
    });
};

const mdp = dispatch => ({
    requestUser: id => dispatch(requestUser(id)),
    deletePost: id => dispatch(deletePost(id))
});

export default withRouter(connect(msp, mdp)(PostIndexItem));
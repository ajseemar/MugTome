import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { requestUser } from '../../actions/users';

const msp = (state, ownProps) => {
    let timelineOwner = null;
    // if (!state.entities.users[ownProps.post.friend_id]) requestUser(ownProps.post.friend_id);
    // if (!state.entities.users[ownProps.post.user_id]) requestUser(ownProps.post.user_id);
    if (ownProps.post.user_id != ownProps.post.friend_id) timelineOwner = state.entities.users[ownProps.post.friend_id];
    // debugger;
    return ({
        postOwner: state.entities.users[ownProps.post.user_id],
        timelineOwner
    });
};

const mdp = dispatch => ({
    requestUser: id => dispatch(requestUser(id))
});

export default connect(msp, mdp)(PostIndexItem);
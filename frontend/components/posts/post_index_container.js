import { connect } from 'react-redux';

import PostIndex from './post_index';
import { requestPosts } from '../../actions/posts';
import { selectPosts } from '../../reducers/selectors';

const msp = state => ({
    user: state.entities.users[state.session.id],
    posts: selectPosts(state.entities, state.entities.users[state.session.id])
});

const mdp = dispatch => ({
    requestPosts: () => dispatch(requestPosts())
});

export default connect(msp, mdp)(PostIndex);
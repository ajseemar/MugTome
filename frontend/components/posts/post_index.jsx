import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.requestPosts();
    }


    renderPosts () {
        if (this.props.posts.length > 0)
            return this.props.posts.map((post, idx) => (
                <PostIndexItemContainer key={idx} post={post} />
            ));
    }

    render () {
        return (
            <div className="post-index-container">
                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

export default PostIndex;
import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.requestPosts();
    }


    renderPosts () {
        if (this.props.posts)
            return this.props.posts.map((post, idx) => (
                <PostIndexItem key={idx} post={post} user={this.props.user} />
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
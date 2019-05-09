import React from 'react';

import CreateCommentContainer from '../comments/create_comment_container';

const MONTHS = Object.freeze([
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
]);

const renderPost = post => {
    if (post) return (
        <p>{post.body}</p>
    );
}

const renderCommentContainer = (post, type) => {
    if (post) return (
        <CreateCommentContainer type={type} typeId={post.id} />
    );
}

const renderTime = (post) => {
    if (post) {
        const [date, time] = post.created_at.split('T');
        const [yr, mth, day] = date.split('-');
        const [hrs, mins] = time.split('.')[0].split(':');
        const hour = parseInt(hrs) % 12;
        return `${MONTHS[parseInt(mth)]} ${day} at ${hour === 0 ? 12 : hour}:${mins} ${parseInt(hrs) > 12 ? 'PM' : 'AM'}`
    }
};

const PostIndexItem = props => {return(
    <div className="post-item-container">
        <header>
            <img className='poster-avatar' src={props.user.avatar} alt="Avatar"/>
            <div>
                <h2>{props.user.first_name[0].toUpperCase() + props.user.first_name.slice(1)} {props.user.last_name[0].toUpperCase() + props.user.last_name.slice(1)}</h2>
                <p>{renderTime(props.post)}</p>
            </div>
        </header>
        

        <main>
            {renderPost(props.post)}
        </main>

        <footer>
            <div className="post-actions-container">
                <button>
                    <i className="far fa-thumbs-up"></i>
                    Like
                </button>
                <label htmlFor="comment">
                    <i className="far fa-comment-alt"></i>
                    Comment
                </label>
            </div>
            {renderCommentContainer(props.post, "post")}
        </footer>

    </div>
);};

export default PostIndexItem;
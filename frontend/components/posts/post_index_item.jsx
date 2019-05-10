import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import CreateCommentContainer from '../comments/create_comment_container';

const MONTHS = Object.freeze([
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
]);

// const PostSettings = props => (
//     (props.user.id === props.postOwner.id) ? (
//         <div className="options-container">
//            <button onClick={() => props.logout(props.user.id)}>Logout</button>
//         </div>
//     ) : (
//         <></>
//     )
// );

class PostIndexItem extends React.Component {
    componentDidMount () {
        // debugger
        if (!this.props.postOwner) this.props.requestUser(this.props.post.user_id);
    }

    renderName ({postOwner, timelineOwner}) {
        if (timelineOwner) return (
            <div className='name-container'>
                <Link className="page-link-container" to={`users/${this.props.postOwner.first_name.toLowerCase()}/${this.props.postOwner.last_name.toLowerCase()}/${this.props.postOwner.id}`}>
                    <h2 className='name'>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
                </Link>
                <i className="fas fa-caret-right"></i>
                <Link className="page-link-container" to={`users/${this.props.timelineOwner.first_name.toLowerCase()}/${this.props.timelineOwner.last_name.toLowerCase()}/${this.props.timelineOwner.id}`}>
                    <h2 className='name'>{timelineOwner.first_name[0].toUpperCase() + timelineOwner.first_name.slice(1)} {timelineOwner.last_name[0].toUpperCase() + timelineOwner.last_name.slice(1)}</h2>
                </Link>
            </div>
        );
        else return (
            <div className="name-container">
                <Link className="page-link-container" to={`users/${this.props.postOwner.first_name.toLowerCase()}/${this.props.postOwner.last_name.toLowerCase()}/${this.props.postOwner.id}`}>
                    <h2 className='name'>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
                </Link>
            </div>
        );
    }

    renderTime (post) {
        const [date, time] = post.created_at.split('T');
        const [yr, mth, day] = date.split('-');
        const [hrs, mins] = time.split('.')[0].split(':');
        const hour = parseInt(hrs) % 12;
        return `${MONTHS[parseInt(mth)]} ${day} at ${hour === 0 ? 12 : hour}:${mins} ${parseInt(hrs) > 12 ? 'PM' : 'AM'}`;
    }

    PostSettings (props) {
        // debugger;
        if (props.user.id === props.postOwner.id) return (
            <div className="options-container">
                <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
            </div>
        );
    }

    renderPostSettings ({user, postOwner, deletePost}) {
        // debugger;
        let visible = false;

        return () => {
            visible = !visible;
            if (visible) ReactDOM.render(<this.PostSettings post={this.props.post} user={user} postOwner={postOwner} deletePost={deletePost} />, document.getElementById('post-settings-container'));
            else ReactDOM.render(<></>, document.getElementById('post-settings-container'));
        }
    };

    render () {
        if (this.props.postOwner === undefined) return null;
        return (
            <div className="post-item-container">
                {/* <Header user={props.user} post={props.post} timeline_owner={props.timeline_owner}/> */}

                <header>
                    <img className='poster-avatar' src={this.props.postOwner.avatar} alt="Avatar" />
                    <div className='subheader-container'>
                        <div>
                            {this.renderName(this.props)}
                            <h3>{this.renderTime(this.props.post)}</h3>
                        </div>
                            <div id='post-settings-button-container'>
                                <i id='post-settings-container' className="fas fa-ellipsis-h"></i>
                            </div>
                    </div>
                </header>

                <main>
                    <p>{this.props.post.body}</p>
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

                    <CreateCommentContainer type="post" typeId={this.props.post.id} />
                </footer>

            </div>
        )
    }
}
export default PostIndexItem;
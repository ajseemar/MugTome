import React from 'react';

import CreateCommentContainer from '../comments/create_comment_container';
import { requestUser } from '../../utils/users_api';

const MONTHS = Object.freeze([
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
]);

// const renderPost = post => {
//     if (post) return (
//         <p>{post.body}</p>
//     );
// }

// const renderCommentContainer = (post, type) => {
//     if (post) return (
//         <CreateCommentContainer type={type} typeId={post.id} />
//     );
// }

// const renderTime = (post) => {
//     if (post) {
//         const [date, time] = post.created_at.split('T');
//         const [yr, mth, day] = date.split('-');
//         const [hrs, mins] = time.split('.')[0].split(':');
//         const hour = parseInt(hrs) % 12;
//         return `${MONTHS[parseInt(mth)]} ${day} at ${hour === 0 ? 12 : hour}:${mins} ${parseInt(hrs) > 12 ? 'PM' : 'AM'}`;
//     }
// };

// const renderName = ({ postOwner, timelineOwner, post, requestUser }) => {
//     if (postOwner === undefined) requestUser(post.user_id);
//     if (timelineOwner === undefined) requestUser(post.user_id);
//     if (timelineOwner) return (
//         <div>
//             <h2>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
//             <i className="fas fa-caret-right"></i>
//             <h2>{timelineOwner}</h2>
//         </div>
//     );
//     else return (
//         <h2>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
//     );
// }

// const Header = props => (
//     <header>
//         {(props.user.avatar) ? (<img className='poster-avatar' src={props.user.avatar} alt="Avatar" />) : (<></>)}
//         <div>
//             {renderName(props)}
//             <p>{renderTime(props.post)}</p>
//         </div>
//     </header>
// )

// const PostIndexItem = props => {return(
    // <div className="post-item-container">
    //     {/* <Header user={props.user} post={props.post} timeline_owner={props.timeline_owner}/> */}
        
    //     <header>
    //         {/* <img className='poster-avatar' src={props.postOwner.avatar} alt="Avatar" /> */}
    //         <div>
    //             {/* {renderName(props)} */}
    //             <p>{renderTime(props.post)}</p>
    //         </div>
    //     </header>

    //     <main>
    //         {renderPost(props.post)}
    //     </main>

    //     <footer>
    //         <div className="post-actions-container">
    //             <button>
    //                 <i className="far fa-thumbs-up"></i>
    //                 Like
    //             </button>
    //             <label htmlFor="comment">
    //                 <i className="far fa-comment-alt"></i>
    //                 Comment
    //             </label>
    //         </div>
    //         {renderCommentContainer(props.post, "post")}
    //     </footer>

    // </div>
// )};


class PostIndexItem extends React.Component {
    componentDidMount () {
        // debugger
        if (!this.props.postOwner) this.props.requestUser(this.props.post.user_id);
    }

    renderName ({postOwner, timelineOwner}) {
        if (timelineOwner) return (
            <div className='name-container'>
                <h2 className='name'>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
                <i className="fas fa-caret-right"></i>
                <h2 className='name'>{timelineOwner.first_name[0].toUpperCase() + timelineOwner.first_name.slice(1)} {timelineOwner.last_name[0].toUpperCase() + timelineOwner.last_name.slice(1)}</h2>
            </div>
        );
        else return (
            <div className="name-container">
                <h2 className='name'>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
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
                            <i className="fas fa-ellipsis-h"></i>
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
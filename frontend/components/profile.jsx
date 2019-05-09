import React from 'react';

import CreatePostContainer from './posts/create_post_container';
import PostIndexContainer from './posts/post_index_container';

const Profile = (props) => (
    <div className='profile-page-container'>
        <div className="profile-page">
            <header className='profile-header'>
                <img className='profile-header-avatar' src={props.user.avatar} alt="profile picture" />
                <div>
                    <div className='title'>
                        <h1>
                            {props.user.first_name[0].toUpperCase() + props.user.first_name.slice(1)} {props.user.last_name[0].toUpperCase() + props.user.last_name.slice(1)}
                        </h1>
                        <button>Edit Profile</button>
                    </div>
                    <div className="profile-navbar"></div>
                </div>
            </header>

            
            {/* // TODO 
            // People You May Know Component */}
                
            <main>
                <div className='informational-components'>
                    {/* Photo Index > Photo Index Item Components */}
                    {/* Friend Index > Friend Index Item Components */}
                </div>
                <div className='post-components'>
                    <CreatePostContainer />
                    <PostIndexContainer />
                </div>
            </main>
        </div>
    </div>
);

export default Profile;
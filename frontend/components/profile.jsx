import React from 'react';

const Profile = (props) => (
    <img src={props.user.avatar} alt="profile picture" />
);

export default Profile;
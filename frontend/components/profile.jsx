import React from 'react';

const Profile = (props) => (
    <h1>{props.user.first_name[0].toUpperCase() + props.user.first_name.slice(1)} {props.user.last_name[0].toUpperCase() + props.user.last_name.slice(1)}</h1>
);

export default Profile;
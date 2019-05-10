import React from 'react';
import { Link } from 'react-router-dom';

import FeatureItem from './feature_index_item';

const FEATURES = Object.freeze(["News Feed", "Welcome"]);

const FeatureIndex = props => (
    <div className="feature-list-container">
        <Link className="profile-link-container" to={`users/${props.user.first_name.toLowerCase()}/${props.user.last_name.toLowerCase()}/${props.user.id}`}>
            <div className="profile-page-link">
                <img src={props.user.avatar} alt="Profile Picture" />
                <p>{props.user.first_name[0].toUpperCase() + props.user.first_name.slice(1)} {props.user.last_name[0].toUpperCase() + props.user.last_name.slice(1)}</p>
            </div>
        </Link>

        <FeatureItem feature="News Feed" path="/home" logo="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-14-512.png"/>
        {/* <FeatureItem id='welcome' feature="Welcome" path="/greeting" logo={'logo.jpg'}/> */}
    </div>
);

export default FeatureIndex;
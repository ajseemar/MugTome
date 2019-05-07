import React from 'react';
import { Link } from 'react-router-dom';

const FeatureItem = props => (
    <Link className='link-container' to={props.path}>
        <div className="link">
            <img src={props.logo} alt={props.feature + ' Logo'} className="icon"/>
            <p>{props.feature}</p>
        </div>
    </Link>
);

export default FeatureItem;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
        <nav>
            <div id='logo'>

            </div>

            <div id='search-bar'>
                <input type="text" placeholder="Search"/>
            </div>

            <div id='profile-page-link'>
                <Link to={`users/${props.user.first_name.toLowerCase()}/${props.user.last_name.toLowerCase()}/${props.user.id}`}>{props.user.first_name[0].toUpperCase() + props.user.first_name.slice(1)}</Link>
            </div>

            <div id="home-page-link">
            
            </div>
        </nav>
);

export default Navbar;
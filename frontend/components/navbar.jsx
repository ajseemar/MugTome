import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
        <nav className='navbar-container'>
            <div className="main-navbar">
                <Link id='logo' to='/home'>
                    <p>m</p>
                </Link>

                <div id='search-bar'>
                    <input type="text" placeholder="Search"/>
                </div>

                <Link className="page-link-container" to={`users/${props.user.first_name.toLowerCase()}/${props.user.last_name.toLowerCase()}/${props.user.id}`}>
                    <div className="profile-page-link">
                        <img src={props.user.avatar} alt="Profile Picture"/>
                        <p>{props.user.first_name[0].toUpperCase() + props.user.first_name.slice(1)}</p>
                    </div>
                </Link>

                <Link className="page-link-container" to='/home'>
                    <p className='home-page-link'>Home</p>
                </Link>

                
                
                
                
                
                
                {/* 
                TODO::

                The following are clickable components that have unique drop down menus

                1) friend reques
                2) notifications
                3) account switcher
                4) messenger { --optional-- (icon comes after friend requests) }
               
                */}
            </div>
        </nav>
);

export default Navbar;
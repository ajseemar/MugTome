import React from 'react';

import NavbarContainer from './navbar_container';

const Home = props => (
    <div>
        <NavbarContainer />


        <main>
            <button onClick={() => props.logout(props.user.id)}>Logout</button>
            {/* Feature Nav Component */}
            {/* Index Container */}
            {/* Story Container */}
            {/* People You May Know Container */}
        </main>
    </div>
);

export default Home;
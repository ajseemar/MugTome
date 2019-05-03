import React from 'react';

import Navbar from './navbar';

const Home = props => (
    <div>
        <Navbar user={props.user}/>


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
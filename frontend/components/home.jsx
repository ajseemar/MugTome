import React from 'react';

const Home = props => (
    <div>
        <nav>
            <button onClick={() => props.logout(props.user.id)}>Logout</button>
        </nav>

        <main>
            {/* Feature Nav Component */}
            {/* Index Container */}
            {/* Story Container */}
            {/* People You May Know Container */}
        </main>
    </div>
);

export default Home;
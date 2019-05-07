import React from 'react';

import NavbarContainer from './navbar_container';
import FeatureIndex from './features/feature_index';

const Home = props => (
    <div id='homepage-container'>
        <NavbarContainer />


        <main className='homepage-main-content'>
            <FeatureIndex user={props.user} />
            {/* Index Container */}
            {/* Story Container */}
            {/* People You May Know Container */}
        </main>
    </div>
);

export default Home;
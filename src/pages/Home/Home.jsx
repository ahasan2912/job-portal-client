import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;
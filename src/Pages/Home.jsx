import React from 'react';
import Category from '../Components/Category';
import LatestIssues from '../Components/LatestIssues';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Banner></Banner>
            <Category></Category>
            <LatestIssues></LatestIssues>
        </div>
    );
};

export default Home;
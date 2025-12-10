import React from 'react';
import Category from '../Components/Category';
import LatestIssues from '../Components/LatestIssues';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h2>THis is home</h2>
            <Category></Category>
            <LatestIssues></LatestIssues>
        </div>
    );
};

export default Home;
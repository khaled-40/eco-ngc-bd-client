import React from 'react';
import Category from '../Components/Category';
import LatestIssues from '../Components/LatestIssues';
import Banner from '../Components/Banner';
import CommunityExtras from '../Components/CommunityExtras';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-1 md:p-2'>
            <Banner></Banner>
            <Category></Category>
            <LatestIssues></LatestIssues>
            <CommunityExtras></CommunityExtras>
        </div>
    );
};

export default Home;
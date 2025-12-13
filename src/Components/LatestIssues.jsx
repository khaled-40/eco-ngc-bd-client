import React, { useEffect, useState } from 'react';
import IssueCard from './IssueCard';
import { Fade } from 'react-awesome-reveal';

const LatestIssues = () => {
    const [issues, setIssues] = useState([]);
    useEffect(() => {
        fetch('https://eco-ngc-bd-server.vercel.app/latest-issues')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIssues(data);
            })
    }, [])
    return (
        <div className='mt-8'>
            <h2 className='text-3xl font-bold'>Latest Issues: <span className='text-primary'>{issues.length}</span></h2>
            <Fade cascade damping={0.1} triggerOnce>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5'>
                    {
                        issues.map(issue => <IssueCard key={issue._id} issue={issue}></IssueCard>)
                    }
                </div>
            </Fade>

        </div>
    );
};

export default LatestIssues;
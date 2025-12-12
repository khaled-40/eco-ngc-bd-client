import React, { useEffect, useState } from 'react';
import IssueCard from '../Components/IssueCard';


const AllIssues = () => {
    const [issues, setIssues] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/issues')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIssues(data);
            })
    }, [])
    return (
        <div className='mt-8 max-w-[1200px] mx-auto'>
            <h2 className='text-3xl font-bold'>Issues: <span className='text-primary'>{issues.length}</span></h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5'>
                {
                    issues.map(issue => <IssueCard key={issue._id} issue={issue}></IssueCard>)
                }
            </div>
        </div>
    );
};

export default AllIssues;
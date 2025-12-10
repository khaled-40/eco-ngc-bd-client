import React from 'react';

const IssueCard = ({ issue }) => {
    console.log(issue)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{issue.title}</h2>
                <p>{issue.description}</p>
                <h4 className='text-xl font-semibold'>Category: {issue.category}</h4>
                <p>Location: {issue.location}</p>
                <button className='btn btn-primary'>See Details</button>
            </div>
        </div>
    );
};

export default IssueCard;
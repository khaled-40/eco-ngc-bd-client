import React from 'react';
import { Link } from 'react-router';

const IssueCard = ({ issue }) => {
    // console.log(issue)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-gray-700">{issue.title}</h2>
                <p className='text-gray-600'>{issue.description}</p>
                <h4 className='text-xl font-semibold text-gray-700'>Category: <span className='badge badge-success'>{issue.category}</span></h4>
                <span className="text-sm text-gray-700">
                    Location: <span className="font-medium text-gray-900">{issue.location}</span>
                </span>
                <Link to={`/issueDetails/${issue._id}`}><button className='btn btn-primary'>See Details</button></Link>
            </div>
        </div>
    );
};

export default IssueCard;
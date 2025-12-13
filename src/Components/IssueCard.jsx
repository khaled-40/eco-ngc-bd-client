import React from "react";
import { Link } from "react-router";

const IssueCard = ({ issue }) => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-md border border-base-300">
            <div className="card-body space-y-2">
                <h2 className="card-title text-2xl font-bold text-base-content">
                    {issue.title}
                </h2>

                <p className="text-base-content/70 line-clamp-3">
                    {issue.description}
                </p>

                <h4 className="text-base-content font-semibold">
                    Category:{" "}
                    <span className="badge btn-primary text-white">
                        {issue.category}
                    </span>
                </h4>

                <span className="text-sm text-base-content/80">
                    Location:{" "}
                    <span className="font-medium text-base-content">
                        {issue.location}
                    </span>
                </span>

                <Link to={`/issueDetails/${issue._id}`}>
                    <button className="btn btn-primary w-full mt-3">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IssueCard;

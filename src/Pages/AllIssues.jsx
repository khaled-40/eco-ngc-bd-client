import React, { useEffect, useState } from "react";
import IssueCard from "../Components/IssueCard";
import Category from "../Components/Category";

const AllIssues = () => {
    const [issues, setIssues] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

    // Fetch data based on category
    const fetchIssues = (category) => {

           let  url = "http://localhost:3000/issues";



        if (category !== "") {
            url = `http://localhost:3000/byCategory/${activeCategory}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => setIssues(data));
    };

    useEffect(() => {
        fetchIssues(activeCategory);
    }, [activeCategory]);

    return (
        <div className="mt-8 max-w-[1200px] mx-auto">
            <Category
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <h2 className="text-3xl font-bold mt-8">
                Issues: <span className="text-primary">{issues.length}</span>
            </h2>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5">
                {issues.map((issue) => (
                    <IssueCard key={issue._id} issue={issue} />
                ))}
            </div>
        </div>
    );
};

export default AllIssues;

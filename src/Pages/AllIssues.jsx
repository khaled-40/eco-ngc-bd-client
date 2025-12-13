import React, { useEffect, useState } from "react";
import IssueCard from "../Components/IssueCard";
import Category from "../Components/Category";
import { Fade } from "react-awesome-reveal";

const AllIssues = () => {
    const [issues, setIssues] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [statusFilter, setStatusFilter] = useState(""); // "" | "ongoing" | "ended"
    const [loading, setLoading] = useState(true); // "" | "ongoing" | "ended"


    useEffect(() => {
        setTimeout(() => setLoading(true), 0);
        let url = "https://eco-ngc-bd-server.vercel.app/issues";

        // If category is selected
        if (activeCategory) {
            url = `https://eco-ngc-bd-server.vercel.app/byCategory/${activeCategory}`;
        }

        // If both category + status
        if (activeCategory && statusFilter) {
            url = `https://eco-ngc-bd-server.vercel.app/byCategoryStatus/${activeCategory}/${statusFilter}`;
        }

        // If only status (no category)
        if (!activeCategory && statusFilter) {
            url = `https://eco-ngc-bd-server.vercel.app/byStatus/${statusFilter}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIssues(data);
                setLoading(false)
            });
    }, [activeCategory, statusFilter]);



    return (
        <div className="mt-8 max-w-[1200px] mx-auto">

            {/* CATEGORY FILTER */}
            <Category
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* ISSUE COUNT + STATUS FILTERS */}
            <div className="mt-8 flex items-center justify-between">

                <h2 className="text-3xl font-bold">
                    Issues: <span className="text-primary">{issues.length}</span>
                </h2>

                {/* STATUS FILTER BUTTONS */}
                <div className="flex gap-3">
                    <button
                        onClick={() => setStatusFilter("ongoing")}
                        className={`px-4 py-2 rounded-lg
                            ${statusFilter === "ongoing"
                                ? "btn-primary text-white"
                                : "bg-white text-primary"}
                        `}
                    >
                        Ongoing
                    </button>

                    <button
                        onClick={() => setStatusFilter("ended")}
                        className={`px-4 py-2 rounded-lg  
                            ${statusFilter === "ended"
                                ? "btn-primary text-white"
                                : "bg-white text-primary"}
                        `}
                    >
                        Ended
                    </button>

                    {/* Clear Filter */}
                    <button
                        onClick={() => setStatusFilter("")}
                        className={`px-4 py-2 rounded-lg  
                            ${statusFilter === ""
                                ? "btn-primary text-white"
                                : "bg-white text-primary"}
                        `}
                    >
                        All
                    </button>
                </div>

            </div>

            {/* ISSUE LIST */}
            {
                loading ?
                    <div className="flex items-center justify-center mt-20">
                        <span className="loading loading-spinner text-success"></span>
                    </div> :

                    <Fade cascade damping={0.1} triggerOnce>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5">
                            {issues.map((issue) => (
                                <IssueCard key={issue._id} issue={issue} />
                            ))}
                        </div>
                    </Fade>
            }

        </div>
    );
};

export default AllIssues;

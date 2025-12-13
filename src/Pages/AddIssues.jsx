import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const AddIssues = () => {
    const { user } = use(AuthContext);

    const handleAddIssue = (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const amount = form.amount.value;

        const status = "ongoing";
        const date = new Date().toISOString();
        const email = user?.email;

        const newIssue = {
            title,
            category,
            location,
            description,
            image,
            amount,
            status,
            date,
            email,
        };

        fetch("https://eco-ngc-bd-server.vercel.app/issues", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newIssue),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Issue Submitted!",
                        text: "Your issue was added successfully.",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }

                form.reset();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Add New Issue</h2>

            <div className="card bg-base-100 shadow-xl p-6">
                <form onSubmit={handleAddIssue} className="space-y-4">

                    {/* Issue Title */}
                    <div>
                        <label className="font-semibold">Issue Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="font-semibold">Category</label>
                        <select
                            name="category"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="Garbage">Garbage</option>
                            <option value="Illegal Construction ">Illegal Construction </option>
                            <option value="Water Logging">Broken Public Property</option>
                            <option value="Park Issues">Road Damage</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold">Description</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Write details about the issue"
                            required
                        ></textarea>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Budget Amount */}
                    <div>
                        <label className="font-semibold">Suggested Fix Budget (Amount)</label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Enter amount"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="input input-bordered w-full bg-base-100"
                        />
                    </div>



                    {/* Submit Button */}
                    <button className="btn btn-primary w-full mt-4">
                        Submit Issue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddIssues;

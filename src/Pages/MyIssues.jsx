import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyIssues = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const [myIssues, setMyIssues] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(null);

    const updateModalRef = useRef();


    // Fetch user-specific issues
    useEffect(() => {
        fetch(`http://localhost:3000/issues?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyIssues(data));
    }, [user?.email]);

    console.log(myIssues)

    // -------------------------------
    //  UPDATE ISSUE FUNCTION
    // -------------------------------
    const handleUpdateIssue = (e) => {
        e.preventDefault();
        const form = e.target;

        const updated = {
            title: form.title.value,
            category: form.category.value,
            description: form.description.value,
            amount: form.amount.value,
            status: form.status.value,
        };

        fetch(`http://localhost:3000/issues/${selectedIssue._id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updated),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Updated Successfully!",
                    timer: 1200,
                    showConfirmButton: false,
                });

                updateModalRef.current.close();

                // update UI instantly
                setMyIssues((prev) =>
                    prev.map((i) => (i._id === selectedIssue._id ? { ...i, ...updated } : i))
                );
            });
    };

    // -------------------------------
    //  DELETE ISSUE FUNCTION
    // -------------------------------
    const handleDeleteIssue = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Now delete
                fetch(`http://localhost:3000/issues/${selectedIssue._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your issue has been deleted.", "success");

                        // Update UI
                        setMyIssues(myIssues.filter(i => i._id !== selectedIssue._id));
                    });
            }
        });
    };


    return (
        <div className="p-4 md:p-6">
            <h2 className="text-3xl font-bold text-center mb-6">My Issues</h2>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table table-zebra w-full">
                    <thead className="bg-base-300">
                        <tr>
                            <th>Title</th>
                            <th className="hidden md:table-cell">Category</th>
                            <th className="hidden md:table-cell">Status</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myIssues.map((issue) => (
                            <tr key={issue._id}>
                                <td className="font-semibold">{issue.title}</td>
                                <td className="hidden md:table-cell">{issue.category}</td>
                                <td className="hidden md:table-cell">
                                    <span
                                        className={`badge ${issue.status === "ongoing"
                                            ? "badge-warning"
                                            : "badge btn-primary"
                                            }`}
                                    >
                                        {issue.status}
                                    </span>
                                </td>
                                <td>৳ {issue.amount}</td>

                                <td className="flex gap-2">
                                    {/* UPDATE BUTTON */}
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={(e) => {
                                             e.currentTarget.blur();
                                            setSelectedIssue(issue);
                                            updateModalRef.current.showModal();
                                        }}
                                    >
                                        Update
                                    </button>

                                    {/* DELETE BUTTON */}
                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => {
                                            setSelectedIssue(issue);
                                            handleDeleteIssue();
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ---------------------------------------------------
           UPDATE MODAL
      --------------------------------------------------- */}
            <dialog ref={updateModalRef} className="modal">
                <div className="modal-box max-w-lg">
                    <h3 className="font-bold text-xl mb-4">Update Issue</h3>

                    {selectedIssue && (
                        <form onSubmit={handleUpdateIssue} className="space-y-3">
                            {/* Title */}
                            <div>
                                <label className="font-semibold">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={selectedIssue.title}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="font-semibold">Category</label>
                                <select
                                    name="category"
                                    defaultValue={selectedIssue.category}
                                    className="select select-bordered w-full"
                                >
                                    <option value="Garbage">Garbage</option>
                                    <option value="Road Damage">Road Damage</option>
                                    <option value="Water Logging">Water Logging</option>
                                    <option value="Park Issues">Park Issues</option>
                                </select>
                            </div>

                            {/* Status */}
                            <div>
                                <label className="font-semibold">Status</label>
                                <select
                                    name="status"
                                    defaultValue={selectedIssue.status}
                                    className="select select-bordered w-full"
                                >
                                    <option value="ongoing">Ongoing</option>
                                    <option value="ended">Ended</option>
                                </select>
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="font-semibold">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    defaultValue={selectedIssue.amount}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="font-semibold">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={selectedIssue.description}
                                    className="textarea textarea-bordered w-full"
                                    rows="3"
                                ></textarea>
                            </div>

                            <button className="btn btn-primary w-full mt-2">Save Changes</button>
                        </form>
                    )}

                    <div className="modal-action">
                        <button className="btn" onClick={() => updateModalRef.current.close()}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default MyIssues;

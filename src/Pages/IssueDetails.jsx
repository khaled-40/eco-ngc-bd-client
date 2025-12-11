import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const IssueDetails = () => {
    const issue = useLoaderData();
    const [contributions, setContributions] = useState([]);
    const {user} = use(AuthContext);
    console.log(user.photoURL)
    const modalRef = useRef(); // <-- modal reference

    const {
        _id,
        title,
        category,
        location,
        description,
        // image,
        date,
        amount,
    } = issue;

    const openModal = () => {
        modalRef.current.showModal();
    };

    const closeModal = () => {
        modalRef.current.close();
    };

    const handleModalSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name)
        const issueId = _id;
        const amount = e.target.amount.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const date = e.target.date.value;
        const additionalInfo = e.target.additionalInfo.value;
        console.log(issueId, name, amount, email,photoURL, phone, address, date, additionalInfo)
        const newContribution = { issueId, amount, name, email,photoURL, phone, address, date, additionalInfo }

        fetch('http://localhost:3000/contributions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newContribution)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after contribution', data)
                if (data.insertedId) {
                    closeModal();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your contribution was successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.error(err);
                alert('Something went wrong');
            });

    }
    useEffect(() => {
        fetch(`http://localhost:3000/issue/contributions/${issue._id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setContributions(data)
        })
    },[issue._id])

    return (
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 space-y-5">

            {/* --- Issue Details Card --- */}
            <div className="bg-white rounded-xl shadow px-2 sm:px-4 md:px-6 space-y-4">
                <img
                    src="https://i.ibb.co.com/nxCCrZ9/TVS-Apache-RTR-160-copy1-cf4fd92da6.webpj"
                    alt={title}
                    className="rounded-lg w-full h-80 object-cover"
                />

                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

                <div className="flex flex-wrap gap-4 text-gray-700">
                    <p><strong>Category:</strong> <span className="badge badge-success">{category}</span></p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
                    <p><strong>Suggested Budget:</strong> <span className="text-green-600 font-bold">৳ {amount}</span></p>
                </div>

                <p className="text-gray-700 leading-relaxed">{description}</p>

                {/* Open Modal */}
                <button className="btn btn-primary mb-3" onClick={openModal}>
                    Pay Clean-Up Contribution
                </button>
            </div>

            {/* --- Contribution Modal (with useRef) --- */}
            <dialog ref={modalRef} className="modal">
                <div className="modal-box max-w-lg">
                    <h3 className="font-bold text-xl mb-4">Contribute to Cleanup</h3>

                    <form onSubmit={handleModalSubmit} method="dialog" className="space-y-3">
                        <div>
                            <label className="font-semibold">Issue Title</label>
                            <input type="text" className="input input-bordered w-full" value={title} readOnly />
                        </div>

                        <div>
                            <label className="font-semibold">Amount</label>
                            <input type="number" name="amount" className="input input-bordered w-full" placeholder="Enter amount" required />
                        </div>

                        <div>
                            <label className="font-semibold">Contributor Name</label>
                            <input type="text" name="name" className="input input-bordered w-full" value={user?.displayName} readOnly />
                        </div>

                        <div>
                            <label className="font-semibold">Email</label>
                            <input type="email" name="email" className="input input-bordered w-full" value={user?.email} readOnly />
                        </div>

                        <div>
                            <label className="font-semibold">PhotoURL</label>
                            <input type="email" name="photoURL" className="input input-bordered w-full" value={user?.photoURL} readOnly />
                        </div>

                        <div>
                            <label className="font-semibold">Phone Number</label>
                            <input type="text" name="phone" className="input input-bordered w-full" placeholder="Your phone" />
                        </div>

                        <div>
                            <label className="font-semibold">Address</label>
                            <input type="text" name="address" className="input input-bordered w-full" placeholder="Your address" />
                        </div>

                        <div>
                            <label className="font-semibold">Date</label>
                            <input
                                type="text"
                                name="date"
                                className="input input-bordered w-full"
                                value={new Date().toLocaleDateString()}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Additional Info (optional)</label>
                            <textarea name="additionalInfo" className="textarea textarea-bordered w-full" placeholder="Anything else?"></textarea>
                        </div>

                        <div className="modal-action">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <button className="btn" onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>


            <div className="bg-white rounded-xl shadow px-2 sm:px-4 md:px-6 mt-8">
                <h2 className="text-2xl font-bold mb-4">Contributors</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                contributions.map(contribution => <tr key={contribution._id}>
                                <td><img src={contribution?.photoURL} className="w-12 h-12 rounded-full" alt="contributor" /></td>
                                <td className="font-medium">{contribution.name}</td>
                                <td className="text-green-600 font-bold">৳ {contribution.amount}</td>
                            </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default IssueDetails;

import React, { useRef } from "react";
import { useLoaderData } from "react-router";

const IssueDetails = () => {
  const issue = useLoaderData();
  const modalRef = useRef(); // <-- modal reference

  const {
    _id,
    title,
    category,
    location,
    description,
    image,
    date,
    amount,
  } = issue;

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* --- Issue Details Card --- */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <img
          src="https://i.ibb.co.com/nxCCrZ9/TVS-Apache-RTR-160-copy1-cf4fd92da6.webp"
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
        <button className="btn btn-primary" onClick={openModal}>
          Pay Clean-Up Contribution
        </button>
      </div>

      {/* --- Contribution Modal (with useRef) --- */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-lg">
          <h3 className="font-bold text-xl mb-4">Contribute to Cleanup</h3>

          <form method="dialog" className="space-y-3">
            <div>
              <label className="font-semibold">Issue Title</label>
              <input type="text" className="input input-bordered w-full" value={title} readOnly />
            </div>

            <div>
              <label className="font-semibold">Amount</label>
              <input type="number" className="input input-bordered w-full" placeholder="Enter amount" required />
            </div>

            <div>
              <label className="font-semibold">Contributor Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your name" required />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input type="email" className="input input-bordered w-full" value="user@example.com" readOnly />
            </div>

            <div>
              <label className="font-semibold">Phone Number</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your phone" />
            </div>

            <div>
              <label className="font-semibold">Address</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your address" />
            </div>

            <div>
              <label className="font-semibold">Date</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={new Date().toLocaleDateString()}
                readOnly
              />
            </div>

            <div>
              <label className="font-semibold">Additional Info (optional)</label>
              <textarea className="textarea textarea-bordered w-full" placeholder="Anything else?"></textarea>
            </div>

            <div className="modal-action">
              <button className="btn btn-primary" type="submit">Submit</button>
              <button className="btn" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </dialog>

      {/* --- Contributors Table (Dummy) --- */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
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
              <tr>
                <td><img src="https://i.pravatar.cc/50" className="w-12 h-12 rounded-full" alt="contributor" /></td>
                <td className="font-medium">John Doe</td>
                <td className="text-green-600 font-bold">৳ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default IssueDetails;

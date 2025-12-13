import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";

const MyContributions = () => {
    const { user } = useContext(AuthContext);
    const [myContributions, setMyContributions] = useState([]);
    const [loading, setLoading] = useState(true);
    const tableRef = useRef();

    // -------------------------------
    // Fetch contributions by user email
    // -------------------------------
    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://eco-ngc-bd-server.vercel.app/contributions?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyContributions(data);
                setLoading(false);
            });
    }, [user?.email]);

    // -------------------------------
    // Download report (simple JSON file for now)
    // -------------------------------
    const handleDownload = (contribution) => {
        const doc = new jsPDF();

        // Title
        doc.setFontSize(18);
        doc.text("Contribution Report", 14, 20);

        // User Info
        doc.setFontSize(12);
        doc.text(`User Email: ${user.email}`, 14, 30);

        // Table
        autoTable(doc, {
            startY: 40,
            head: [["Issue Title", "Category", "Amount", "Date"]],
            body: [
                [
                    contribution.title,
                    contribution.category,
                    contribution.amount + " BDT",
                    contribution.date,
                ],
            ],
            styles: { fontSize: 11 },
            headStyles: {
                fillColor: [22, 163, 74], // emerald-600 (your brand color)
                textColor: 255,
            },
        });

        // Save
        doc.save(`contribution_report_${contribution._id}.pdf`);
    };
    // -------------------------------
    // Loading state
    // -------------------------------
    if (loading) {
        return (
            <div className="flex items-center justify-center mt-20">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    // console.log(myContributions)
    return (
        <div className="p-2 md:p-4 lg:p-6">
            <h2 className="text-3xl font-bold text-center mb-6">My Contributions</h2>

            {/* If no contributions */}
            {myContributions.length === 0 ? (
                <p className="text-center text-gray-600 mt-10">
                    You have not made any contributions yet.
                </p>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table ref={tableRef} className="table table-zebra w-full">
                        <thead className="bg-base-300">
                            <tr>
                                <th>Issue Title</th>
                                <th className="hidden md:table-cell">Category</th>
                                <th>Paid Amount</th>
                                <th className="hidden md:table-cell">Date</th>
                                <th>Report</th>
                            </tr>
                        </thead>

                        <tbody>
                            {myContributions.map((item) => (
                                <tr key={item._id}>
                                    <td className="font-semibold">{item.title}</td>
                                    <td className="hidden md:table-cell">{item.category}</td>
                                    <td>৳ {item.amount}</td>
                                    <td className="hidden md:table-cell">{item.date}</td>

                                    <td>
                                        <button
                                            onClick={() => handleDownload(item)}
                                            className="btn btn-sm btn-primary flex items-center gap-2"
                                        >
                                            <FaDownload /> Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyContributions;

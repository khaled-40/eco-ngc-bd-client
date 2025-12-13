import React from "react";
import {  FaCheckCircle, FaClock, FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
let stats={
    users: 245,
    resolved: 120,
    pending: 80,
  }
const CommunityExtras = () => {
  return (
    <div className="mt-16 space-y-16">

      {/* ---------- COMMUNITY STATS SECTION ---------- */}
      <section className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Community <span className="text-primary">Impact Stats</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Registered Users */}
          <div className="p-6 shadow-2xl rounded-2xl bg-base hover:shadow-5xl transition">
            <HiUsers className="text-4xl mx-auto mb-3" />
            <h3 className="text-2xl font-bold">{stats.users}</h3>
            <p className="text-gray-500">Registered Users</p>
          </div>

          {/* Issues Resolved */}
          <div className="p-6 shadow-2xl rounded-2xl bg-base hover:shadow-xl transition">
            <FaCheckCircle className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">{stats.resolved}</h3>
            <p className="text-gray-500">Issues Resolved</p>
          </div>

          {/* Issues Pending */}
          <div className="p-6 shadow-2xl rounded-2xl bg-base hover:shadow-xl transition">
            <FaClock className="text-4xl text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">{stats.pending}</h3>
            <p className="text-gray-500">Pending Issues</p>
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 py-16 rounded-2xl max-w-[1200px] mx-auto shadow-lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Join Our Community Clean-Up Movement
          </h2>

          <p className="text-lg text-white/90 mb-6">
            Become a volunteer and help make your neighborhood cleaner,
            greener, and safer for everyone. Small actions create big impact.
          </p>

          <button className="btn px-8 btn-primary text-white text-lg rounded-full">
            Become a Volunteer
          </button>
        </div>
      </section>

    </div>
  );
};

export default CommunityExtras;

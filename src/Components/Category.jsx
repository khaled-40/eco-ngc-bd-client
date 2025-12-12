import React from "react";

const categories = [
  "Garbage",
  "Illegal Construction",
  "Broken Public Property",
  "Road Damage",
];

const Category = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
      {categories.map((cat,index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(cat)}
          className={`btn w-full p-4 border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white
            ${activeCategory === cat ? "bg-green-600 text-white" : "btn-outline"}
          `}
        >
          {cat}
        </button>
      ))}

      {/* Reset Filter Button */}
      {/* <button
        onClick={() => setActiveCategory("all")}
        className={`btn w-full p-4 
        ${activeCategory === "all" ? "bg-green-600 text-white" : "btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white"}`}
      >
        All
      </button> */}
    </div>
  );
};

export default Category;


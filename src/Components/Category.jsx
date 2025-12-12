import React from 'react';

const Category = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
            <div className="btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white w-full">
                Garbage
            </div>
            <div className="btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white w-full">
                Illegal Construction
            </div>
            <div className="btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white w-full">
                Broken Public Property
            </div>
            <div className="btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white w-full">
                Road Damage
            </div>
        </div>
    );
};

export default Category;

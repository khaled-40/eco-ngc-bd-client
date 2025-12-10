import React from 'react';

const Category = () => {
    return (
        <div className=' text-center space-x-2'>
            <div className='btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white'>
                <p>Garbage</p>
            </div>
            <div className='btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white'>
                <p>Illegal Construction </p>
            </div>
            <div className='btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white'>
                <p>Broken Public Property</p>
            </div>
            <div className='btn p-4 btn-outline border-[#16A34A] text-[#16A34A] hover:bg-green-500 hover:text-white'>
                <p>Road Damage</p>
            </div>
        </div>
    );
};

export default Category;
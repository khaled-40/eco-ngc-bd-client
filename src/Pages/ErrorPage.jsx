import React from 'react';
import { useNavigate } from 'react-router';
import errorImg from '../assets/undraw_page-not-found_6wni.png'

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className=' my-auto text-center mb-5'>
            <img className='mx-auto pt-12 mb-8 w-60 sm:w-72 md:w-96' src={errorImg} alt="" />
            <h2 className='font-bold text-5xl text-[#001931]'>Oops, page not found!</h2>
            <p className='text-base mt-3 mb-5'>The page you are looking for is not available.</p>
            <button onClick={() => navigate(-1)} className='btn rounded btn-primary text-white text-base'>Go Back!</button>
        </div>
    );
};

export default ErrorPage;
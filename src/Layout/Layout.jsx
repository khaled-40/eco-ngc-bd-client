import React from 'react';
import Headers from '../Components/Headers';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-right" autoClose={2500} />
        </div>
    );
};

export default Layout;
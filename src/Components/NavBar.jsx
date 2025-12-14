import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import './Header.css';
import { CiLogout } from "react-icons/ci";
import { toast } from 'react-toastify';
import logo from '../assets/1087.jpg'
import ThemeToggle from './ThemeToggle';


const NavBar = () => {
    const { user, signOutUser } = use(AuthContext)
    console.log(user)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allIssues'}>All Issues</NavLink></li>
        {
            user && <>
                <li><NavLink to={'/addIssues'}>Add Issues</NavLink></li>
                <li><NavLink to={'/myIssues'}>My Issues</NavLink></li>
                <li><NavLink to={'/myContribution'}>My Contribution</NavLink></li>
            </>
        }

    </>

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center lg:max-w-11/12 mx-auto">
            <div className="navbar-start w-auto flex gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <a className=" btn-ghost text-xl flex items-center gap-2">
                    <img src={logo} alt="EcoNGC Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full shadow-md" />
                    <h3>Eco<span className='text-primary'>NGC</span></h3></a>
            </div>
            <div className="navbar-end w-auto">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    {links}
                </ul>
                {
                    !user ? (
                        <>
                            <Link to={'/logIn'} className='btn btn-primary'>LogIn</Link>
                            <Link to={'/register'} className='btn ml-2 btn-primary'>Register</Link>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end relative z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src={user?.photoURL || "https://i.ibb.co.com/nxCCrZ9/TVS-Apache-RTR-160-copy1-cf4fd92da6.webp"}
                                        alt="user avatar"
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                                <li><ThemeToggle></ThemeToggle></li>
                                <li><a onClick={handleLogout}><CiLogout />Logout</a></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;
import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/1087.jpg'

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col text-center md:flex-row md:justify-between md:items-start gap-8">
                    {/* Logo & Description */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <img
                                src={logo}
                                alt="EcoNGC Logo"
                                className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full shadow-md"
                            />
                            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">EcoNGC</h2>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Promoting clean communities and sustainable urban spaces.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="flex-1">
                        <h3 className="font-semibold mb-2">Useful Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/allIssues" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    All Issues
                                </Link>
                            </li>
                            <li>
                                <Link to="/addIssues" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    Add Issues
                                </Link>
                            </li>
                            <li>
                                <Link to="/myIssues" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    My Issues
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} EcoNGC. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

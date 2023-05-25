/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpeg'
const Navbar = () => {
    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link>All Toys</Link></li>
    <li><Link>My Toys</Link></li>
    <li><Link to='addtoys'>Add Toys</Link></li>
    <li><Link>Blogs</Link></li>
    </>
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='w-24 h-24' src={logo} alt="" />
                    </Link>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/' className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent">All Toys</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent">My Toys</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='addtoys' className="flex items-center px-4 -mb-1 dark:border-transparent">Add Toys</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent">Blogs</Link>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <Link to='/login'><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign In</button></Link>
                    </div>
                    
                </div>
            </header>
        </div>
    );
};

export default Navbar;
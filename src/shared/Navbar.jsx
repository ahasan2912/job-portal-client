import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContex/AuthContex';
import jobIcon from '../assets/logo.png'

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleSginOut = () => {
        logOutUser()
            .then(() => {
                console.log("Successful sign out");
            })
            .catch(err => {
                console.log('failed to sign out. stay here, don not leave me alone')
            })
    }
    const links = <>
        <div className='space-x-2'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/myApplications'>My Application</NavLink>
            <NavLink to='/addjob'>Add Job</NavLink>
            <NavLink to='/myPostedJobs'>My Posted Jobs</NavLink>
        </div>
    </>
    return (
        <div className="navbar bg-base-200 w-full px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl flex items-center gap-2">
                    <img className='w-12' src={jobIcon} alt="" />
                    <h1 className='text-4xl font-semibold'>Job Portal</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ? <> <button onClick={handleSginOut} className='btn'>LogOut</button>
                    </> : <>
                        <Link to='/register' className='btn'>Register</Link>
                        <Link to='/login' className="btn">Sign In</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;
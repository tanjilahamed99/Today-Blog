"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../Hooks/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const ulLinks = <>
        <li><Link href={'/'}>Home</Link></li>
        {
            user && <li><Link href={'/addBlog'}>Add New Blogs</Link></li>
        }
        <li><Link href={'/'}>My Blogs</Link></li>
    </>

    const handleLogout = () => {
        logout()
        .then(result=>{
            Swal.fire({
                title: "Logout successful",
                showConfirmButton: false,
                timer: 1500
            })
        })
    }




    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Todays Blog</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <button onClick={handleLogout} className='btn btn-outline text-red-600'>Logout</button> : <Link href={'/login'}>
                        <button className="btn btn-outline">Login</button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;
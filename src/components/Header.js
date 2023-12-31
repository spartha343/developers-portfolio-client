import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MyButton from './MyButton';

const Header = () => {

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/skills'>Skills</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
    </>

    return (
        <div className="navbar sticky top-0 shadow-sm bg-white/90 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-base">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-base md:text-xl">Partha's Portfolio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-base">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end mr-2">
                <MyButton>
                    <Link to='https://drive.google.com/file/d/1eCml9Vimd_etkNklfAvUvY7O7M5IQrTD/view?usp=sharing'>Resume</Link>
                </MyButton>
            </div>
        </div>
    );
};

export default Header;
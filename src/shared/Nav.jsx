import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='py-4 px-2 border-b border-slate-300'>
            <div className="my-container">
                <NavLink className="px-4 py-2 rounded-md mr-2 inline-block hover:bg-red-300" to="/">Home</NavLink>
                <NavLink className="px-4 py-2 rounded-md mr-2 inline-block hover:bg-red-300" to="/payments">Payments</NavLink>
                <NavLink className="px-4 py-2 rounded-md mr-2 inline-block hover:bg-red-300" to="/replace">Replace</NavLink>
            </div>
        </nav>
    );
};

export default Nav;
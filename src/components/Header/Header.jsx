import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-amber-500 h-15  max-w-[1200px] mx-auto flex justify-center flex-col items-center'>
            <h3>This is header</h3>
            <nav className='flex gap-2'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/Laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;
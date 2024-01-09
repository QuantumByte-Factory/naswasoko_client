import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white px-[5%] border-b py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <a href="/" className="text-black text-xl font-bold">
                    Naswasoko
                </a>
                <ul className="flex space-x-4 text-[14px]">
                    <Link to="/" className="text-black hover:text-black">
                        Home
                    </Link>
                    <Link to="/shop/all-products" className="text-gray-500 hover:text-black">
                        Shop
                    </Link>
                    <Link to="/" className="text-gray-500 hover:text-black">
                        Featured
                    </Link>
                    <Link to="/" className="text-gray-500 hover:text-black">
                        Recommended
                    </Link>

                </ul>
            </div>

            <div className="flex-grow px-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-gray-100 text-black focus:outline-none outline-none rounded-full border"
                />
            </div>

            <div className="flex items-center space-x-4">
                <Link to='/accounts/sign-up' className="bg-black text-white px-4 py-2 border border-black">
                    Sign Up
                </Link>
                <Link to='/accounts/login' className="bg-white text-black border border-black px-4 py-2">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;


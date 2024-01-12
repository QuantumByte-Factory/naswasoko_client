import React, { useState } from 'react';
import { MdMenu, MdOutlineSearch } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useCart } from '../CartContext';
import { useUser } from '../UserContext';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/naswasokologo.png'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const user = useUser();

    const handleSearch = () => {
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <>
            <nav className="bg-white w-full px-[5%] border-b py-4 flex items-center justify-between">
                <div className="flex items-center w-full md:w-fit justify-between md:justify-center space-x-4 relative">
                    <a href="/" className="text-black text-xl font-bold">
                        <img className='w-[100px] md:w-[130px]' src={logo} alt="" />
                    </a>
                    <div className="flex md:hidden">
                        <div className="flex items-center gap-2">
                            <Link className='flex items-center' to='/cart'>
                                <BsCart3 size={24} /> ({cartItems?.length})
                            </Link>
                            <button className='' onClick={() => setOpenMenu(!openMenu)}>
                                {openMenu ? <IoMdClose size={24} /> : <MdMenu size={24} />}
                            </button>
                        </div>
                        {openMenu &&
                            <div className="bg-gray-200 p-2  flex flex-col justify-start absolute left-0 h-[200px] top-full w-full h-[180px] z-20">
                                <Link to="/" className="text-black ">
                                    Home
                                </Link>
                                <Link to="/shop/all-products" className="text-black">
                                    Shop
                                </Link>
                                <Link to="/" className="text-black">
                                    Featured
                                </Link>
                                <Link to="/" className="text-black">
                                    Recommended
                                </Link>
                                {user ? <div className='flex items-center gap-2'>
                                    <Link to={`/orders/${user._id}`} className="">{user.fullName}</Link>
                                    {/* <FaUserCircle size={24} /> */}
                                </div> : <>
                                        <Link to='/accounts/sign-up' className="bg-gray-100 flex py-1 justify-center text-black">
                                            Sign Up
                                        </Link>
                                        <Link to='/accounts/login' className="bg-black mt-2 flex py-1 justify-center text-white">
                                            Login
                                        </Link>
                                </>}
                                
                            </div>}
                    </div>
                    <ul className="hidden md:flex space-x-4 text-[14px]">
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

                <div className="justify-between items-center hidden md:flex px-4 bg-gray-100  md:w-[40%] text-black rounded-full border">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="bg-transparent py-2 focus:outline-none outline-none w-full"
                        style={{ width: '60%' }}
                    />
                    <button onClick={handleSearch} className="">
                        <MdOutlineSearch size={28} />
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-4 ">
                    <Link className='flex items-center' to='/cart'>
                        <BsCart3 size={24} /> ({cartItems?.length})
                    </Link>
                    {user ?
                        <div className='flex items-center gap-2'>
                            <Link to={`/orders/${user._id}`} className="">{user.fullName}</Link>
                            <FaUserCircle size={24} />
                        </div> : <>
                            <Link to='/accounts/sign-up' className="bg-black text-white px-4 py-2 border border-black">
                                Sign Up
                            </Link>
                            <Link to='/accounts/login' className="bg-white text-black border border-black px-4 py-2">
                                Login
                            </Link>
                        </>}
                </div>

            </nav>
            <div className="flex md:hidden w-full mt-2 px-[5%]">
                <div className="justify-between flex items-center px-4 bg-gray-100 w-full text-black rounded-full border">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="bg-transparent py-1 focus:outline-none outline-none w-full"
                        style={{ width: '60%' }}
                    />
                    <button onClick={handleSearch} className="">
                        <MdOutlineSearch size={28} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

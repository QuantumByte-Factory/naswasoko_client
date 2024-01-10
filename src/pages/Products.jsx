import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCartArrowDown, FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { IoMdShare } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data); // Set fetched products to the state
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <>
            <Navbar />
            <div className="flex py-[2%] px-[5%]">
                <div className="h-auto w-[11%] bg-gray-50 ">
                    {/* <aside className="w-full h-full shadow p-4">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Filter by</h2>
                            <div className="flex flex-col space-y-2">
                                <button
                                    className={` flex text-[14px] py-2 ${selectedCategory === 'Category A' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedCategory('Category A')}
                                >
                                    Category A
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedCategory === 'Category B' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedCategory('Category B')}
                                >
                                    Category B
                                </button>
                                <button
                                    className={` flex text-[14px] py-2 ${selectedCategory === 'Category A' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedCategory('Category A')}
                                >
                                    Category A
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedCategory === 'Category B' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedCategory('Category B')}
                                >
                                    Category B
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Featured Brands</h2>
                            <div className="flex flex-col space-y-2">
                                <button
                                    className={` flex text-[14px] py-2 ${selectedBrand === 'Brand X' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedBrand('Brand X')}
                                >
                                    Von
                                </button>
                                <button
                                    className={` flex text-[14px] py-2  ${selectedBrand === 'Brand Y' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedBrand('Brand Y')}
                                >
                                    Hisense
                                </button>
                                <button
                                    className={` flex text-[14px] py-2 ${selectedBrand === 'Brand X' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedBrand('Brand X')}
                                >
                                    Von
                                </button>
                                <button
                                    className={` flex text-[14px] py-2  ${selectedBrand === 'Brand Y' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => setSelectedBrand('Brand Y')}
                                >
                                    Hisense
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                            <div className="flex flex-col space-y-2">
                                <input
                                    type="number"
                                    className="border py-2 px-4 rounded"
                                    placeholder="Min Price"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })}
                                />
                                <input
                                    type="number"
                                    className="border py-2 px-4 rounded"
                                    placeholder="Max Price"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })}
                                />
                            </div>
                        </div>
                    </aside> */}
                </div>

                <div className="w-[89%] px-4">
                    <div className="w-full flex justify-between">
                        <p className='capitalize font-medium text-[24px] '>all products</p>
                        <div className="flex capitalize font-light items-center">
                            displaying <span className='font-medium px-2'>{products?.length}</span> items <FaChevronDown className='ml-2' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {products.map((product) => (
                            <Link to={`/products/${product._id}`} key={product.id} className="flex hover:border-black cursor-pointer w-[250px] flex-col justify-between gap-[2%] border shadow-md">
                                <div className="flex flex-col">
                                    <img className='w-full' src={product?.images[0]} alt={product.title} />
                                    <div className="w-full flex p-2 justify-end gap-2">
                                        <MdVerified />
                                        <FaRegHeart />
                                        <IoMdShare />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="font-medium text-black text-[14px]">{product.title}</p>
                                    <div className="w-full items-center flex justify-between">
                                        <p className="text-[16px] font-medium text-gray-700 py-2">Ksh {product.price.toLocaleString("KES")}.00</p>
                                        <p className="text-gray-400 font-light text-[13px]">{product?.brand?.title}</p>
                                    </div>
                                    <button className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">Add to Cart <span className="ml-2">|</span> <FaCartArrowDown className='ml-2' /></button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;

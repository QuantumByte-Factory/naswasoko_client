import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa6';
import { IoMdShare } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import Loader from '../elements/Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [currentPage, setCurrentPage] = useState(1);

    const { addToCart } = useCart();
    const navigate = useNavigate();

    const loader = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const cacheKey = `productsPage${currentPage}`;
                const cachedData = localStorage.getItem(cacheKey);

                if (cachedData) {
                    setProducts(prevProducts => [...prevProducts, ...JSON.parse(cachedData)]);
                    setLoading(false);
                    return;
                }

                const response = await fetch(`https://naswa.onrender.com/api/products?page=${currentPage}`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(prevProducts => [...prevProducts, ...data]);
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [currentPage]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/search?query=${category}`);
    };

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        navigate(`/search?query=${brand}`);
    };

    const handleScroll = () => {
        if (loader.current && loader.current.getBoundingClientRect().bottom <= window.innerHeight) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex py-[2%] px-[5%]">
                <div className="h-auto hidden md:flex w-[11%] bg-gray-50 ">
                    <aside className="w-full h-full shadow p-4">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Find</h2>
                            <div className="flex flex-col space-y-2">
                                <button
                                    className={`flex text-[14px] py-2 ${selectedCategory === 'Microwave' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleCategoryClick('Microwave')}
                                >
                                    Microwave
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedCategory === 'Blender' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleCategoryClick('Blender')}
                                >
                                    Blender
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedCategory === 'Fridge' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleCategoryClick('Fridge')}
                                >
                                    Fridge
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedCategory === 'Cooker' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleCategoryClick('Cooker')}
                                >
                                    Cooker
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Featured Brands</h2>
                            <div className="flex flex-col space-y-2">
                                <button
                                    className={`flex text-[14px] py-2 ${selectedBrand === 'Von' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleBrandClick('Von')}
                                >
                                    Von
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedBrand === 'Mika' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleBrandClick('Mika')}
                                >
                                    Mika
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedBrand === 'Hisense' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleBrandClick('Hisense')}
                                >
                                    Hisense
                                </button>
                                <button
                                    className={`flex text-[14px] py-2 ${selectedBrand === 'Ramtons' ? 'text-black font-medium' : 'text-gray-400'}`}
                                    onClick={() => handleBrandClick('Ramtons')}
                                >
                                    Ramtons
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
                    </aside>
                </div>

                <div className="w-full md:w-[89%] px-0 md:px-4">
                    <div className="w-full flex justify-between">
                        <p className='capitalize font-medium text-[16px] md:text-[24px] '>all products</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {products.map((product) => (
                            <Link
                                to={`/products/${product._id}`}
                                key={product.id}
                                className="flex hover:border-black cursor-pointer w-full md:w-[250px] justify-between h-auto md:h-[350px] flex-col gap-[2%] border shadow-md"
                            >
                                <img
                                    className='w-fit h-full md:h-[50%] mx-auto py-2'
                                    src={product?.images[0]}
                                    alt={product.title}
                                />
                                <div className="p-4">
                                    <p className="font-medium text-black text-[14px]">{product.title}</p>
                                    <div className="w-full items-center flex justify-between">
                                        <p className="text-[16px] font-medium text-gray-700 py-2">Ksh {product.price.toLocaleString("KES")}.00</p>
                                        <p className="text-gray-400 font-light text-[13px]">{product?.brand?.title}</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2"
                                    >
                                        Add to Cart <span className="ml-2">|</span> <FaCartArrowDown className='ml-2' />
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>


                </div>
            </div>
            <div ref={loader}></div>
            {loading && <Loader />}
            <Footer />
        </>
    );
};

export default Products;

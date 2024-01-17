import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Section = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://naswa.onrender.com/api/products/new');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                    setLoading(false);
                } else {
                    console.error('Failed to fetch new products');
                }
            } catch (error) {
                console.error('Error fetching new products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleNavigate = ()=> {
        navigate(`/search?query=electronics`);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://naswa.onrender.com/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                    setLoading(false); 
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
        <div className="px-[5%] flex flex-col gap-[2%]">
            <div className="flex w-full items-center mb-2 justify-between">
                <p className="text-[20px] font-medium text-black">Picks Just For You</p>
                <button className="bg-black px-2 px-4 py-1.5 text-white text-[14px]">
                    Show All
                </button>
            </div>
            <div className="flex flex-col w-full md:flex-row gap-[2%]">
                {loading
                    ? Array.from({ length: 5 }, (_, index) => (
                        <div role="status" className="space-y-8 animate-pulse md:space-y-0  rtl:space-x-reverse w-full flex flex-col md:items-center">
                            <div className="flex items-center justify-center w-full h-64 bg-gray-300 dark:bg-gray-700">
                            </div>
                            <div className="w-full">
                                <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[50%] mt-6 my-2"></div>
                                <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[60%] my-2"></div>
                                <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[70%] my-2 mb-2"></div>
                                <div className="flex w-full gap-[5%] items-center">
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[30%] my-2"></div>
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[30%] my-2"></div>
                                </div>
                                <div className="h-[40px] bg-gray-200 dark:bg-gray-700 w-full my-2"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ))
                    : data.slice(2, 8).map((product) => (
                        <Link
                            to={`/products/${product._id}`}
                            key={product._id}
                            className="flex w-full md:w-[250px] flex-col justify-between gap-[2%] border shadow-md"
                        >
                            <img className="w-full" src={product.images[0]} alt={product.title} />
                            <div className="p-4">
                                <p className="font-medium text-black text-[14px]">{product.title}</p>
                                <p className="text-[16px] font-medium text-gray-700 py-2">{product.price.toLocaleString('KES')}</p>
                                <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                            </div>
                        </Link>
                    ))}
            </div>
            

            <div className="flex w-full items-center mb-2 justify-between mt-4">
                <p className="text-[20px] font-medium text-black">Popular Right Now</p>
                <button className="bg-black px-2 px-4 py-1.5 text-white text-[14px]">
                    Show All
                </button>
            </div>
            <div className="flex flex-col w-full md:flex-row gap-[2%]">
                {loading
                    ? Array.from({ length: 5 }, (_, index) => (
                        <div role="status" className="space-y-8 animate-pulse md:space-y-0  rtl:space-x-reverse w-full flex flex-col md:items-center">
                            <div className="flex items-center justify-center w-full h-64 bg-gray-300 dark:bg-gray-700">
                            </div>
                            <div className="w-full">
                                <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[50%] mt-6 my-2"></div>
                                <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[60%] my-2"></div>
                                <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[70%] my-2 mb-2"></div>
                                <div className="flex w-full gap-[5%] items-center">
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[30%] my-2"></div>
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[30%] my-2"></div>
                                </div>
                                <div className="h-[40px] bg-gray-200 dark:bg-gray-700 w-full my-2"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ))
                    : data.slice(0, 6).map((product) => (
                        <Link
                            to={`/products/${product._id}`}
                            key={product._id}
                            className="flex w-full md:w-[250px] flex-col justify-between gap-[2%] border shadow-md"
                        >
                            <img className="w-full" src={product.images[0]} alt={product.title} />
                            <div className="p-4">
                                <p className="font-medium text-black text-[14px]">{product.title}</p>
                                <p className="text-[16px] font-medium text-gray-700 py-2">{product.price.toLocaleString('KES')}</p>
                                <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                            </div>
                        </Link>
                    ))}
            </div>

            <div className="flex w-full items-center mb-2 justify-between mt-4">
                <p className="text-[20px] font-medium text-black">More Products</p>
            </div>
            <div className="flex mb-6 gap-[2%]">
                <button onClick={handleNavigate} className="hidden md:flex w-[250px] pb-4 justify-end bg flex-col gap-[2%] border shadow-md">
                    <p className='text-white text-[26px] font-medium px-4 '>Electronics</p>
                    <button className="bg-gray-100 bg-opacity-70 text-gray-800 mx-4 py-1.5 font-medium">View All</button>
                </button>
                <div  className="flex flex-col w-full md:flex-row gap-[2%]">
                    {loading
                        ? Array.from({ length: 5 }, (_, index) => (
                            <div role="status" className="space-y-8 animate-pulse md:space-y-0  rtl:space-x-reverse w-full flex flex-col md:items-center">
                                <div className="flex items-center justify-center w-full h-64 bg-gray-300 dark:bg-gray-700">
                                </div>
                                <div className="w-full">
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[50%] mt-6 my-2"></div>
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[60%] my-2"></div>
                                    <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[70%] my-2 mb-2"></div>
                                    <div className="flex w-full gap-[5%] items-center">
                                        <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[30%] my-2"></div>
                                        <div className="h-[13px] rounded-full bg-gray-200 dark:bg-gray-700 w-[30%] my-2"></div>
                                    </div>
                                    <div className="h-[40px] bg-gray-200 dark:bg-gray-700 w-full my-2"></div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ))
                        : products.slice(0, 5).map((product) => (
                            <Link
                                to={`/products/${product._id}`}
                                key={product._id}
                                className="flex w-full md:w-[250px] flex-col justify-between gap-[2%] border shadow-md"
                            >
                                <img className="w-full" src={product.image} alt={product.title} />
                                <div className="p-4">
                                    <p className="font-medium text-black text-[14px]">{product.title}</p>
                                    <p className="text-[16px] font-medium text-gray-700 py-2">{product.price.toLocaleString('KES')}</p>
                                    <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Section;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCartArrowDown, FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { IoMdShare } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

    useEffect(() => {
        const sampleProducts = [
            { id: 1, name: 'Red Shirt', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Clothing', brand: 'Brand A', price: 25 },
            { id: 2, name: 'Blue Jeans', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/71930daa64544c6db85a96555e24f8f4.jpg', category: 'Clothing', brand: 'Brand B', price: 45 },
            { id: 3, name: 'Running Shoes', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/e55a96c145fa4b9290fdc2765c141fea.jpg', category: 'Footwear', brand: 'Brand C', price: 60 },
            { id: 4, name: 'Wireless Headphones', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Electronics', brand: 'Brand D', price: 120 },
            { id: 5, name: 'Smartphone', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/46cd7a6f84f34af5a6460a212a8b5d77.jpg', category: 'Electronics', brand: 'Brand E', price: 500 },
            { id: 6, name: 'Backpack', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/fa684ad4180d44caa1dd1c1cdfdbd7af.jpg', category: 'Bags', brand: 'Brand F', price: 40 },
            { id: 7, name: 'Coffee Maker', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Appliances', brand: 'Brand G', price: 80 },
            { id: 8, name: 'Leather Wallet', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/7c27f2e920074b779fc36d2fcb593754.jpg', category: 'Fitness', brand: 'Brand I', price: 70 },
            { id: 10, name: 'Sunglasses', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/5d55bbc7cd314a7f964752f0f048eb53.jpg', category: 'Accessories', brand: 'Brand J', price: 50 },
            { id: 11, name: 'Gaming Mouse', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Gaming', brand: 'Brand K', price: 55 },
            { id: 12, name: 'Desk Lamp', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1282944-e962e02ec3fb4c4fb38a0c3d581f33a7.jpg', category: 'Home Decor', brand: 'Brand L', price: 35 },
            { id: 13, name: 'Winter Jacket', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1626517-980e462fb76d4cf98c8ac456684aab3d.jpg', category: 'Clothing', brand: 'Brand M', price: 80 },
            { id: 14, name: 'Yoga Mat', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1296997-bbf6572b4c3644769c0fdf515ddafdcf.jpg', category: 'Fitness', brand: 'Brand N', price: 20 },
            { id: 15, name: 'Kitchen Knife Set', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/30dab4437289450ab7e74550cfb9e09b.jpg', category: 'Kitchen', brand: 'Brand O', price: 90 },
            { id: 16, name: 'Bluetooth Speaker', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/fc8467b9480542df85abb633e9bbc17a.jpg', category: 'Electronics', brand: 'Brand P', price: 70 },
            { id: 17, name: 'Hiking Boots', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/fc8467b9480542df85abb633e9bbc17a.jpg', category: 'Footwear', brand: 'Brand Q', price: 100 },
            { id: 18, name: 'Camping Tent', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1345105-6d7817edce614a8db70c00b97de3f7d5.jpg', category: 'Outdoor', brand: 'Brand R', price: 150 },
            { id: 19, name: 'Digital Camera', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1296997-bbf6572b4c3644769c0fdf515ddafdcf.jpg', category: 'Electronics', brand: 'Brand S', price: 300 },
            { id: 20, name: 'Pendant Necklace', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1296997-bbf6572b4c3644769c0fdf515ddafdcf.jpg', category: 'Jewelry', brand: 'Brand T', price: 40 },
            // ...
        ];
        setProducts(sampleProducts);
    }, []);

    // Function to filter products based on selected category, brand, and price range
    const filteredProducts = products.filter((product) => {
        const passCategoryFilter = !selectedCategory || product.category === selectedCategory;
        const passBrandFilter = !selectedBrand || product.brand === selectedBrand;
        const passPriceRangeFilter =
            product.price >= priceRange.min && product.price <= priceRange.max;

        return passCategoryFilter && passBrandFilter && passPriceRangeFilter;
    });

    return (
        <>
            <Navbar />
            <div className="flex py-[2%] px-[5%]">
                <div className="h-auto w-[11%] bg-gray-50 ">
                    <aside className="w-full h-full shadow p-4">
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
                    </aside>
                </div>

                <div className="w-[89%] px-4">
                    <div className="w-full flex justify-between">
                        <p className='capitalize font-medium text-[24px] '>all products</p>
                        <div className="flex capitalize font-light items-center">
                            displaying <span className='font-medium px-2'>24</span> items <FaChevronDown className='ml-2' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {filteredProducts.map((product) => (
                            <Link to={`/products/${product.id}/view-details`} key={product.id} className="flex hover:border-black cursor-pointer w-[250px] flex-col justify-between gap-[2%] border shadow-md">
                                <div className="flex flex-col">
                                    <img className='w-full' src={product.image} alt={product.name} />
                                    <div className="w-full flex p-2 justify-end gap-2">
                                        <MdVerified />
                                        <FaRegHeart />
                                        <IoMdShare />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="font-medium text-black text-[14px]">{product.name}</p>
                                    <p className="text-[16px] font-medium text-gray-700 py-2">Ksh {product.price}.00</p>
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

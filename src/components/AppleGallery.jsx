import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const appleImages = require.context('../assets/apple', false, /\.(jpg|jpeg|png)$/);
const appleImagePaths = appleImages.keys().map(appleImages);

const AppleGallery = () => {
    const [activeTab, setActiveTab] = useState('gallery');
    const [productCategory, setProductCategory] = useState('all');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setProductCategory('all');
    };

    const handleProductCategoryChange = (category) => {
        setProductCategory(category);
    };

    return (
        <>
            <Navbar />
            <div className="px-[5%] mx-auto py-8">
                <div className="flex mb-4">
                    <button
                        onClick={() => handleTabChange('gallery')}
                        className={`mr-4 px-4 py-2 focus:outline-none ${activeTab === 'gallery' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                    >
                        Apple Gallery
                    </button>
                    <button
                        onClick={() => handleTabChange('products')}
                        className={`px-4 py-2 focus:outline-none ${activeTab === 'products' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                    >
                        Apple Products
                    </button>
                </div>

                {activeTab === 'gallery' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {appleImagePaths.map((imagePath, index) => (
                            <div key={index} className="bg-white shadow-md">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={imagePath}
                                    alt={`Apple Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'products' && (
                    <div>
                        <div className="flex w-full overflow-x-auto mb-4">
                            <button
                                onClick={() => handleProductCategoryChange('all')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'all' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('iphones')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'iphones' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                iPhones
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('imacs')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'imacs' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                iMacs
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('macbooks')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'macbooks' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                MacBooks
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('macmini')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'macmini' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                MacMini
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('ipad')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'ipad' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                Ipad
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('iphone')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'iphone' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                Iphone
                            </button>
                            <button
                                onClick={() => handleProductCategoryChange('airpods')}
                                className={`mr-4 px-4 py-2 focus:outline-none ${productCategory === 'airpods' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                Airpods
                            </button>

                        </div>

                        {/* Render products based on the selected category */}
                        {productCategory === 'all' && (
                            // Render all products
                            <p>All Apple Products...</p>
                        )}

                        {productCategory === 'iphones' && (
                            // Render iPhones
                            <p>iPhones here...</p>
                        )}

                        {productCategory === 'imacs' && (
                            // Render iMacs
                            <p>iMacs here...</p>
                        )}

                        {productCategory === 'macbooks' && (
                            // Render MacBooks
                            <p>MacBooks here...</p>
                        )}

                    </div>
                )}

                <Link to="/" className="mt-8 block bg-black text-white w-fit px-5 py-1.5 hover:underline">
                    Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default AppleGallery;

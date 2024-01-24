import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const appleImages = require.context('../assets/apple', false, /\.(jpg|jpeg|png)$/);
const appleImagePaths = appleImages.keys().map(appleImages);

const AppleGallery = () => {
    return (
        <>
            <Navbar />
            <div className="px-[5%] mx-auto py-8">
                <h2 className="text-[26px] font-semibold mb-4">The Apple Gallery</h2>
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
                <Link to="/" className="mt-8 block text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default AppleGallery;

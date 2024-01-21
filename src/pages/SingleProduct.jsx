import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaInstagram, FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import { FaCartArrowDown, FaXTwitter } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { MdOutlineVerified } from "react-icons/md";
import Loading from '../elements/Loading';
import { useCart } from '../CartContext';
import ImageMagnifier from '../elements/ImageMagnifier';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { id } = useParams();
    const { addToCart, cartItems } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://naswa.onrender.com/api/products/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                    if (data.images && data.images.length > 0) {
                        setSelectedImage(data.images[0]);
                    }
                } else {
                    console.error('Failed to fetch product');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
            setLoading(false);
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    }

    const handlePrevImage = () => {
        const prevIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
        setSelectedImage(product.images[prevIndex]);
        setCurrentImageIndex(prevIndex);
    };

    const handleNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % product.images.length;
        setSelectedImage(product.images[nextIndex]);
        setCurrentImageIndex(nextIndex);
    };

    return (
            <div>
                <Navbar />
                <div className="flex px-[5%] flex-col py-[2%]">
                    <div className="flex flex-col gap-2 items-start ">
                        <button onClick={() => { }} className="flex items-center gap-2">
                            <FaAngleLeft />
                            <span>Go back</span>
                        </button>
                        {loading ? (
                            <Loading />
                        ) : (
                            <div className="">
                                <div className="border p-4 flex flex-col md:flex-row w-full md:w-2/3">
                                    <div className="flex flex-col md:flex-row flex-wrap overflow-x-auto w-full md:w-1/2">
                                        <div className="flex md:flex-col justify-start md:justify-center md:mx-auto gap-2 mt-4">
                                            {product.images &&
                                                product.images.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        className={`w-20 h-20 object-cover ${selectedImage === image ? 'border-2 border-black' : 'opacity-70'
                                                            }`}
                                                        src={image}
                                                        alt={`Product ${index}`}
                                                        onClick={() => handleImageClick(image)}
                                                    />
                                                ))}
                                        </div>
                                        <div onClick={openModal} className="px-[5%] w-full md:w-2/3 mt-4 md:mt-0">
                                            <ImageMagnifier src={selectedImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full md:w-1/2">
                                        <p className="text-gray-400 font-light text-[11px]">Category</p>
                                        <p className="font-medium text-[24px] ">{product?.title}</p>
                                        <div className="w-fit flex items-center gap-2 bg-green-100 p-2 ">
                                            <MdOutlineVerified />
                                            <span className="">In stock</span>
                                        </div>
                                        <div className="flex items-center my-2 gap-2">
                                            <span>Quantity:</span>
                                            <span className="bg-green-100 p-2">
                                                {product.quantity} items left
                                            </span>
                                        </div>
                                        <p className="font-semibold text-[24px] my-2">
                                            Ksh {product?.price?.toLocaleString('KES')}
                                        </p>
                                        <button onClick={handleAddToCart} className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">
                                            Add to Cart <span className="ml-2">|</span> <FaCartArrowDown className='ml-2' />
                                        </button>
                                        <div className="flex flex-col my-3.5">
                                            <span className="font-medium text-[16px]">
                                                Save this product for later
                                            </span>
                                            <button className='flex border border-gray-300 px-2 py-1.5 w-fit items-center gap-2'>
                                                <FaRegHeart />
                                                Favorite
                                            </button>
                                        </div>
                                        <div className="flex flex-col mb-2">
                                            <p className="text-[16px] font-light">
                                                Share with friends and family
                                            </p>
                                            <div className="flex items-center w-fit gap-4">
                                                <div className="bg-gray-100 p-1 items-end flex gap-1">
                                                    <FaFacebookF size={28} className='bg-blue-500 text-white p-2' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                                <div className="bg-gray-100 p-1 items-end flex gap-1">
                                                    <FaWhatsapp size={28} className='bg-green-500 text-white p-2' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                                <div className="bg-gray-100 p-1 items-end flex gap-1">
                                                    <FaInstagram size={28} className='bg-rose-200 text-black p-2' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                                <div className="bg-gray-100 p-1 items-end flex gap-1">
                                                    <FaXTwitter size={28} className='bg-gray-200 text-black p-2' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full md:w-2/3 mt-[2%] p-[2%] bg-gray-100">
                                    <p className="font-medium text-[18px]">
                                        Product Details
                                    </p>
                                    <p className="border-b">
                                        Brand: <span className='font-medium'>
                                            {product?.brand?.title}
                                        </span>
                                    </p>
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-50">
                    <div className="modal relative bg-white p-4 w-1/3">
                        <button className="absolute top-4 right-4 text-white" onClick={closeModal}>
                            Close
                        </button>
                        <div className="flex items-center justify-center">
                            <img src={selectedImage} alt="Product" className="" />
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="text-white bg-gray-800 px-4 py-2 rounded"
                                onClick={handlePrevImage}
                            >
                                <FaAngleLeft className="mr-2" />
                                Prev
                            </button>
                            <button
                                className="text-white bg-gray-800 px-4 py-2 rounded"
                                onClick={handleNextImage}
                            >
                                Next
                                <FaAngleRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            </div>
    );
};

export default SingleProduct;

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaInstagram, FaLock, FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import { FaArrowsRotate, FaCartArrowDown, FaXTwitter } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineVerified } from "react-icons/md";
import Loading from '../elements/Loading';
import { useCart } from '../CartContext';
import ImageMagnifier from '../elements/ImageMagnifier';
import { IoMdClose, IoMdTime } from 'react-icons/io';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = useNavigate();

    const { id } = useParams();
    const { addToCart, cartItems } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart')
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
                        setCurrentImageIndex(0);
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
        if (product.images && product.images.length > 0) {
            const currentIndex = product.images.indexOf(selectedImage);
            const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
            const newImage = product.images[prevIndex];
            setSelectedImage(newImage);
        }
    };

    const handleNextImage = () => {
        if (product.images && product.images.length > 0) {
            const currentIndex = product.images.indexOf(selectedImage);
            const nextIndex = (currentIndex + 1) % product.images.length;
            const newImage = product.images[nextIndex];
            setSelectedImage(newImage);
        }
    };

    const handleOrderOnWhatsApp = () => {
        const message = `Hello Naswasoko, I would like to order the following product:\n\n${product.title}\nPrice: Ksh ${product.price.toLocaleString('KES')}\n\nPlease provide further details.`;

        const whatsappNumber = '+254729776804';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, '_blank');
    };

    const shareOnFacebook = () => {
        const shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(shareLink, '_blank');
    };

    const shareOnWhatsApp = () => {
        const shareText = `Check out this product: ${product.title}\nPrice: Ksh ${product.price.toLocaleString('KES')}\n${window.location.href}`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappLink, '_blank');
    };

    const shareOnInstagram = () => {
        alert('Instagram sharing is not supported directly.\nYou can manually share by visiting your Instagram account, and sharing this product link with friends and family.');
    };

    const shareOnTwitter = () => {
        const shareText = `Check out this awesome product: ${product.title}!\n#Product #Shopping #Naswasoko\n${window.location.href}`;
        const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(twitterLink, '_blank');
    };

    return (
        <div>
            <Navbar />
            <div className="flex px-[5%] flex-col py-[2%]">
                <div className="flex flex-col gap-2 items-start ">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2">
                        <FaAngleLeft />
                        <span>Go back</span>
                    </button>
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="w-full flex gap-[2%]">
                            <div className="flex flex-col w-full gap-[2%] md:w-2/3">
                                <div className="border p-4 flex flex-col md:flex-row w-full">
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
                                        <div className="flex w-full gap-[2%] items-center">
                                            <button
                                                className="flex justify-center items-center text-white font-medium gap-2 bg-green-500 w-full py-1.5"
                                                onClick={handleOrderOnWhatsApp}
                                            >
                                                <FaWhatsapp /> Order
                                            </button>
                                            <button
                                                className="flex items-center justify-center gap-2 bg-yellow-200 py-1.5  w-full"
                                                onClick={handleAddToCart}
                                            >
                                                Buy (pay on delivery)
                                            </button>
                                        </div>
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
                                            <div className="flex flex-wrap items-center w-fit gap-4">
                                                <div className="bg-gray-100 p-1 items-end flex gap-1 cursor-pointer" onClick={shareOnFacebook}>
                                                    <FaFacebookF size={24} className='bg-blue-500 text-white p-1' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                                <div className="bg-gray-100 p-1 items-end flex gap-1 cursor-pointer" onClick={shareOnWhatsApp}>
                                                    <FaWhatsapp size={24} className='bg-green-500 text-white p-1' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                                <div className="bg-gray-100 p-1 items-end flex gap-1 cursor-pointer" onClick={shareOnInstagram}>
                                                    <FaInstagram size={24} className='bg-rose-200 text-black p-1' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                                <div className="bg-gray-100 p-1 items-end flex gap-1 cursor-pointer" onClick={shareOnTwitter}>
                                                    <FaXTwitter size={24} className='bg-gray-200 text-black p-1' />
                                                    <span className="text-gray-400 font-light">
                                                        share
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full mt-[2%] p-[2%] bg-gray-100">
                                    <p className="text-[18px]">
                                        Product Details
                                    </p>
                                    <p className="border-b">
                                        Brand: <span className='font-medium'>
                                            {product?.brand?.title}
                                        </span>
                                    </p>
                                    <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
                            </div>
                            <div className="hidden md:flex p-4 md:w-1/3 flex-col border ">
                                <p className='flex items-center gap-2 text-[24px] font-medium border-b'>
                                    <FaLock />
                                    Secure payment options
                                </p>
                                <p className="text-[15px] font-light py-2">
                                    With Naswasoko you are able to pay and on the delivery, Naswasoko keeps your payment information secure and our shops never receive your credit card information. If paying online your credit won't be charged until you confirm that you received your order.
                                </p>
                                <p className="border-t border-b text-[16px] font-normal py-1">
                                    Delivery within Nairobi CBD from as low as KSH 110
                                </p>
                                <div className="">
                                    <p className="text-[20px] font-medium">
                                        Delivery fee depending on the area
                                    </p>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2">Nairobi - Ksh. 500</li>
                                        <li class="mb-2">Nairobi CBD - Ksh. 110</li>
                                    </ul>
                                </div>
                                <p className='flex items-center gap-2 text-gray-700 text-[15px]'>
                                    <IoMdTime />
                                    Delivery in Nairobi: within 2hrs (From the time of order)
                                </p>
                                <p className='flex items-center gap-2 text-gray-700 text-[15px]'>
                                    <IoMdTime />
                                    Delivery outside Nairobi: 1 -2 business days
                                </p>
                                <p className='flex items-center gap-2 text-gray-700 text-[15px]'>
                                    <FaArrowsRotate />
                                    Returns: Accepted within 48 hrs(after delivery)
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-60">
                    <div className="modal relative bg-white p-4 w-full md:w-1/3">
                        <button className="absolute top-2 right-2 bg-gray-200 text-black p-2 rounded-full" onClick={closeModal}>
                            <IoMdClose />
                        </button>
                        <div className="w-full flex justify-between items-center gap-4">
                            <button
                                className="bg-gray-200 flex items-center justify-center p-2 rounded-full"
                                onClick={handlePrevImage}
                            >
                                <FaAngleLeft className="" size={24} />
                            </button>
                            <div className="flex items-center justify-center">
                                <img src={selectedImage} alt="Product" className="" />
                            </div>
                            <button
                                className="bg-gray-200 flex items-center justify-center p-2 rounded-full"
                                onClick={handleNextImage}
                            >
                                <FaAngleRight className="" size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SingleProduct;

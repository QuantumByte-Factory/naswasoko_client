import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import Loading from '../elements/Loading';
import { useCart } from '../CartContext';
import ImageMagnifier from '../elements/ImageMagnifier';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [isImageHovered, setIsImageHovered] = useState(false);

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
                                    <div className="px-[5%] w-full md:w-2/3 mt-4 md:mt-0">
                                        <ImageMagnifier src={selectedImage} />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <p className="text-gray-400 font-light text-[11px]">Category</p>
                                    <p className="font-medium text-[24px] ">{product?.title}</p>
                                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                    <p className="font-semibold text-[24px] my-2">
                                        Ksh {product?.price?.toLocaleString('KES')}
                                    </p>
                                        <button onClick={handleAddToCart} className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">
                                            Add to Cart <span className="ml-2">|</span> <FaCartArrowDown className='ml-2' />
                                        </button>
                                    <p className="text-gray-600 font-light text-[14px]">
                                        <span className="font-medium">{product.quantity}</span> Items in stock
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
    );
};

export default SingleProduct;

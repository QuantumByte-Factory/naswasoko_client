import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { IoMdShare } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../elements/Loading';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:4000/api/products/${id}`);
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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/products/new');
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
                                <div className="pl-[5%] w-full md:w-2/3 mt-4 md:mt-0">
                                    <img className="w-[90%]" src={selectedImage} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <p className="text-gray-400 font-light text-[11px]">Category</p>
                                <p className="font-medium text-[24px] ">{product?.title}</p>
                                <p className="pt-4  text-[14px] font-light ">
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                </p>
                                <p className="font-semibold text-[24px] my-2">
                                    Ksh {product?.price?.toLocaleString('KES')}
                                </p>
                                <button className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">
                                    Add to Cart <span className="ml-2">|</span> <FaCartArrowDown size={18} className="ml-2" />
                                </button>
                                <p className="text-gray-600 font-light text-[14px]">
                                    <span className="font-medium">{product.quantity}</span> Items left in stock
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <p className="text-[24px] font-medium mt-4 pb-2">Top Picks for you</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {products.map((product) => (
                            <Link to={`/products/${product._id}`} key={product.id} className="flex hover:border-gray-400 cursor-pointer w-full md:w-[250px] flex-col justify-between gap-[2%] border shadow-md">
                                <div className="flex flex-col">
                                    <img className='w-full' src={product?.image} alt={product.title} />
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
        </div>
    );
};

export default SingleProduct;

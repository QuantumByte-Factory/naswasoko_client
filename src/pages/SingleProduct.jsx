import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaAngleLeft } from "react-icons/fa";
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { IoMdShare } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:4000/api/products/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data); // Set the fetched product to the state
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

    return (
        <div>
            <Navbar />
            <div className="flex px-[5%] flex-col py-[2%]">
                <div className="flex flex-col gap-2 items-start ">
                    <button onClick={navigate(-1)} className='flex items-center gap-2 '>
                        <FaAngleLeft />
                        <span>Go back</span>
                    </button>
                    {loading ? <p>Loading...</p> :
                        <div className='border p-4 flex flex-col md:flex-row w-full md:w-1/2'>
                            <div className="w-1/2">
                                <img className='w-[90%]' src={product?.images} alt="" />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="text-gray-400 font-light text-[11px]">
                                    Category
                                </p>
                                <p className="font-medium text-[24px] ">
                                    {product?.title}
                                </p>
                                <p className="pt-4  text-[14px] font-light ">
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                </p>
                                <p className="font-semibold text-[24px] my-2">
                                    Ksh {product?.price?.toLocaleString("KES")}
                                </p>
                                <button className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">Add to Cart <span className="ml-2">|</span> <FaCartArrowDown size={18} className='ml-2' /></button>
                                <p className="text-gray-600 font-light text-[14px]">
                                    <span className="font-medium">{product.quantity}</span> Items left in stock
                                </p>
                                {/* <div className="border-t mt-4 border-gray-400 py-2">
                                <p className="text-[18px] font-medium">For Your Knowledge:</p>
                                <p className='font-light text-gray-500 text-[14px]'>
                                    With Naswasoko you are able to pay and on the delivery, Naswasoko keeps your payment information secure and our shops never receive your credit card information. If paying online your credit won't be charged until you confirm that you received your order.
                                </p>
                            </div> */}
                            </div>
                        </div>}
                </div>
            </div>
            <div className="flex px-[5%] flex-col mb-4 gap-4">
                <p className="font-medium text-[24px]">
                    Top Selling On Naswasoko
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <div key={product.id} className="flex hover:border-black cursor-pointer w-[250px] flex-col justify-between gap-[2%] border shadow-md">
                        <div className="flex flex-col">
                            <img className='w-full' src={product?.images} alt={product.name} />
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleProduct

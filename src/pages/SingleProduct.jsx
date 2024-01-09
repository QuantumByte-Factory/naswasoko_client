import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaAngleLeft } from "react-icons/fa";
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { IoMdShare } from 'react-icons/io';

const SingleProduct = () => {
    const products = [
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
    ]
    return (
        <div>
            <Navbar />
            <div className="flex px-[5%] flex-col py-[2%]">
                <div className="flex flex-col gap-2 items-start ">
                    <div className='flex items-center gap-2 '>
                        <FaAngleLeft />
                        <span>Go back</span>
                    </div>
                    <div className='border p-4 flex flex-col md:flex-row w-full md:w-1/2'>
                        <div className="w-1/2">
                            <img src="https://skygarden2.azureedge.net/images-thumbnails/products/1626517-980e462fb76d4cf98c8ac456684aab3d.jpg" alt="" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <p className="text-gray-400 font-light text-[11px]">
                                Category
                            </p>
                            <p className="font-medium text-[24px] ">
                                Tiktilaok Manok
                            </p>
                            <p className="pt-4  text-[14px] font-light ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim voluptate perferendis cupiditate excepturi! Deserunt excepturi corporis delectus tempore, dolorem possimus quas culpa ad nemo, perspiciatis cum, animi facilis odio.
                            </p>
                            <p className="font-semibold text-[24px] my-2">
                                Ksh 234,490
                            </p>
                            <button className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">Add to Cart <span className="ml-2">|</span> <FaCartArrowDown size={18} className='ml-2' /></button>
                            <p className="text-gray-600 font-light text-[14px]">
                                <span className="font-medium">4</span> Items left in stock
                            </p>
                            <div className="border-t mt-4 border-gray-400 py-2">
                                <p className="text-[18px] font-medium">For Your Knowledge:</p>
                                <p className='font-light text-gray-500 text-[14px]'>
                                    With Naswasoko you are able to pay and on the delivery, Naswasoko keeps your payment information secure and our shops never receive your credit card information. If paying online your credit won't be charged until you confirm that you received your order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-[5%] flex-col mb-4 gap-4">
                <p className="font-medium text-[24px]">
                    Top Selling On Naswasoko
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {products.slice(0, 11).map((product) => (
                        <div key={product.id} className="flex hover:border-black cursor-pointer w-[250px] flex-col justify-between gap-[2%] border shadow-md">
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
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleProduct

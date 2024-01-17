import React from 'react';
import { Link } from 'react-router-dom';

import hisense from '../assets/Hisense Logo.jpeg';
import jbl from '../assets/JBL.png';
import ramtons from '../assets/Ramtons Logo.png';
import samsung from '../assets/Samsung Logo.jpeg';
import tcl from '../assets/TCL Logo.jpeg';
import von from '../assets/Von Logo 2.png';
import roch from '../assets/Roch Logo.png';
import haier from '../assets/Haier Logo.jpeg';
import lg from '../assets/LG Logo.jpeg'

const brands = [
    { name: 'TCL', image: tcl },
    { name: 'Hisense', image: hisense },
    { name: 'Samsung', image: samsung },
    { name: 'JBL', image: jbl },
    { name: 'Ramtons', image: ramtons },
    { name: 'Von', image: von },
    { name: 'Roch', image: roch },
    { name: 'Haier', image: haier },
    { name: 'Lg', image: lg },
];

const categories = ['Computing', 'Electronics', 'Home Appliances', 'Kitchen Appliances', 'Waching machine', 'Blender'];

const CatsHome = () => {
    return (
        <>
            <div className="w-full px-[5%] flex flex-col justify-center gap-[2%] bg-gray-100 py-[5%] ">
            <p className="text-gray-900 font-medium text-[28px] pb-4 ">More Categories to choose from From</p>
            <div className="flex flex-col md:flex-row gap-[2%] ">
                {categories.map((category, index) => (
                    <Link
                        to={`/search?query=${category}`}
                        key={index}
                        className={`bg-white p-2 w-full flex rounded-md shadow-md h-[150px] `}
                    >
                        <p className='text-center text-gray-700 m-auto text-[26px] font-medium '>{category}</p>
                    </Link>
                ))}
            </div>
        </div >
            <div className="bg-[#222222] flex flex-col py-[2%] px-[5%] text-white ">
                <p className='text-gray-100 font-medium text-[28px] mb-2'>Brands You Know</p>
                <div className="flex w-full overflow-x-auto gap-[2%]">
                    {brands.map((brand, index) => (
                        <Link
                            to={`/search?query=${brand.name}`}
                            key={index}
                            className="w-[150px] my-auto h-[50px]"
                        >
                            <img className='w-full h-full' src={brand.image} alt={brand.name} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row py-[5%] px-[5%] gap-[2%] ">
                <div className="p-3 md:p-6 w-full flex flex-col bg-gray-200 gap-4">
                    <img className='w-[50px] bg-black p-2 rounded-full' src="https://sky.garden/assets/svg-icons/icon-service.svg" alt="" />
                    <p className="text-[24px] font-medium">
                        Customer service that cares
                    </p>
                    <p className="text-gray-600 ">
                        We are based in Nairobi and are available on Phone and Chat 24/7.
                    </p>
                </div>
                <div className="p-3 md:p-6 w-full flex flex-col bg-black gap-4 text-white">
                    <img className='w-[50px] bg-black p-2 rounded-full' src="https://sky.garden/assets/svg-icons/icon-new-truck.svg" alt="" />
                    <p className="text-[24px] font-medium">
                        Same day delivery
                    </p>
                    <p className="text-gray-200 ">
                        Order before noon and let us take care of the rest.
                    </p>
                </div>
                <div className="p-3 md:p-6 w-full flex flex-col bg-gray-200 gap-4">
                    <img className='w-[50px] bg-black p-2 rounded-full' src="https://sky.garden/assets/svg-icons/icon-shop.svg" alt="" />
                    <p className="text-[24px] font-medium">
                        Opportunities for Small Shops
                    </p>
                    <p className="text-gray-600 ">
                        We support local and open for every small scale business
                    </p>
                </div>
            </div>
        </>
    )
}

export default CatsHome

import React from 'react'

const CatsHome = () => {
    return (
        <>
            <div className="w-full px-[5%] flex flex-col justify-center gap-[2%] bg-gray-100 py-[5%] ">
                <p className="text-gray-900 font-medium text-[28px] pb-4 ">
                    More Categories to choose from From
                </p>
                <div className="flex flex-col md:flex-row gap-[2%] ">
                    <div className="bg p-2 w-full flex rounded-md shadow-md h-[150px]">
                        <p className='text-center text-gray-100 m-auto text-[26px] font-medium '>
                            Computing
                        </p>
                    </div>
                    <div className="bg2 p-2 w-full flex rounded-md shadow-md h-[150px]">
                        <p className='text-center text-gray-100 m-auto text-[26px] font-medium '>
                            Computing
                        </p>
                    </div>
                    <div className="bg p-2 w-full flex rounded-md shadow-md h-[150px]">
                        <p className='text-center text-gray-100 m-auto text-[26px] font-medium '>
                            Computing
                        </p>
                    </div>
                    <div className="bg2 p-2 w-full flex rounded-md shadow-md h-[150px]">
                        <p className='text-center text-gray-100 m-auto text-[26px] font-medium '>
                            Computing
                        </p>
                    </div>
                    <div className="bg p-2 w-full flex rounded-md shadow-md h-[150px]">
                        <p className='text-center text-gray-100 m-auto text-[26px] font-medium '>
                            Computing
                        </p>
                    </div>
                    <div className="bg2 p-2 w-full flex rounded-md shadow-md h-[150px]">
                        <p className='text-center text-gray-100 m-auto text-[26px] font-medium '>
                            Computing
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#222222] flex flex-col py-[2%] px-[5%] text-white ">
                <p className='text-gray-100 font-medium text-[28px] mb-2'>Brands You Know</p>
                <div className="flex gap-[2%]">
                    <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/logo.png" alt="" />
                    <div className="bg-white">
                        <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/Hisense.png" alt="" />
                    </div>
                    <div className="bg-white">
                        <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/Hotpoint_2.png" alt="" />
                    </div>
                    <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/313396187_444589584481313_8368165958352328_n.jpg" alt="" />
                    <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/download_1.png" alt="" />
                    <div className="bg-gray-50">
                        <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/lg_1.png" alt="" />
                    </div>
                    <div className="bg-white">
                        <img className='w-[100px]' src="https://skygarden2.azureedge.net/media/original_images/Mika.png" alt="" />
                    </div>
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

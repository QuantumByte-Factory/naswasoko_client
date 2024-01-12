import React from 'react'
import banner from '../assets/banner5.jpg'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <img className='z-1' src={banner} alt="" />
      <div className='z-10 gap-[2%] py-[2%] grid grid-cols-2 md:grid-cols-6 mb-3 justify-center bg-gray-50 bg-opacity-70 mx-0 px-[5%] md:px-0 md:mx-[10%] '>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Smartphones</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Computing</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Computing.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Electronics</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Electronics.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Kitchen Appliances</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

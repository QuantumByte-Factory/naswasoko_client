import React from 'react'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <img className='z-0' src="http://naswasoko.co.ke/static/media/banner6.e80f5820ac319b7fcf74.jpg" alt="" />
      <div className='z-10 gap-[2%] py-[2%] flex flex-col md:flex-row justify-center bg-gray-50 bg-opacity-70 mx-[10%] '>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Smartphones</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Computing</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Computing.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Electronics</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Electronics.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Kitchen Appliances</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg" alt="" />
        </div>
        <div className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
          <p className='text-[20px] font-medium mb-4'>Home Appliances</p>
          <img className='h-full' src="https://sky.garden/assets/images/category-card-images/standby/Furniture.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner5.jpg';

const categories = [
  { name: 'Smartphones', image: 'https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg' },
  { name: 'Computing', image: 'https://sky.garden/assets/images/category-card-images/standby/Computing.jpg' },
  { name: 'Electronics', image: 'https://sky.garden/assets/images/category-card-images/standby/Electronics.jpg' },
  { name: 'Kitchen Appliances', image: 'https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg' },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <img className='z-1' src={banner} alt="" />
      <div className='z-10 gap-[2%] py-[2%] grid grid-cols-2 md:grid-cols-6 mb-3 justify-center bg-gray-50 bg-opacity-70 mx-0 px-[5%] md:px-0 md:mx-[10%] '>
        {categories.map((category, index) => (
          <Link to={`/search?query=${category.name}`} key={index} className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
            <p className='text-[20px] font-medium mb-4'>{category.name}</p>
            <img className='h-full' src={category.image} alt={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hero;

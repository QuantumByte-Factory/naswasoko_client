import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import banner1 from '../assets/banner5.jpg';
import banner2 from '../assets/banner4.jpg';
import banner3 from '../assets/banner6.jpg';

const categories = [
  { name: 'Smartphones', image: 'https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg' },
  { name: 'Computing', image: 'https://sky.garden/assets/images/category-card-images/standby/Computing.jpg' },
  { name: 'Electronics', image: 'https://sky.garden/assets/images/category-card-images/standby/Electronics.jpg' },
  { name: 'Kitchen Appliances', image: 'https://sky.garden/assets/images/category-card-images/standby/Smartphones.jpg' },
];

const Hero = () => {
  const bannerImages = [banner1, banner2, banner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
    }, 6000);

    return () => clearInterval(intervalId);

  }, [bannerImages.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + bannerImages.length) % bannerImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full h-full overflow-hidden">
        <div className="slider-container flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img className="w-full h-full object-cover" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className='z-10 gap-[2%] py-[2%] grid grid-cols-2 md:grid-cols-6 mb-3 justify-center bg-gray-50 bg-opacity-70 mx-0 px-[5%] md:px-0 md:mx-[10%] '>
        {categories.map((category, index) => (
          <Link to={`/search?query=${category.name}`} key={index} className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[220px]">
            <p className='text-[20px] font-medium mb-4'>{category.name}</p>
            <img className='h-full' src={category.image} alt={category.name} />
          </Link>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Hero;

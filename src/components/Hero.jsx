import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apple from '../assets/apple.jpeg'
import tv from '../assets/tv.png'
import home from '../assets/home.jpeg'
import kitchen from '../assets/Edenberg.jpeg'

import banner1 from '../assets/banner5.jpg';
import banner2 from '../assets/banner4.jpg';
import banner3 from '../assets/banner6.jpg';


const mika = 'https://naswabucket.s3.amazonaws.com/1703154120994.jpg';
const ramtons = 'https://naswabucket.s3.amazonaws.com/1703164037121.jpg';

const categories = [
  { name: 'Apple Devices', image: apple },
  { name: 'Home Appliances', image: home },
  { name: 'Electronics', image: tv },
  { name: 'Kitchen Appliances', image: kitchen },
  { name: 'Cookware', image: mika },
  { name: 'Ramtons', image: ramtons }, 
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

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full h-full z-10 overflow-hidden">
        <div className="slider-container flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img className="w-full h-full object-cover" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className='z-10 gap-[2%] py-[2%] grid grid-cols-2 md:grid-cols-6 mb-3 justify-center bg-gray-50 bg-opacity-70 mx-0 px-[5%] md:px-[5%] '>
        {categories.map((category, index) => (
          <Link to={category.name === 'Apple Devices' ? '/apple-gallery' : `/search?query=${category.name}`} key={index} className="bg-white p-3 flex cursor-pointer flex-col shadow-md w-full md:w-[180px] bg-opacity-70 justify-center text-center h-[240px]">
            <p className='text-[17px] font-medium mb-4'>{category.name}</p>
            <img className='w-[90%] h-[80%]' src={category.image} alt={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;

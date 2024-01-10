import React, { useState, useEffect } from 'react';
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa6';
import { IoMdShare } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../CartContext';
import Loading from '../elements/Loading';

const SearchedProducts = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/search?query=${category}`);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    navigate(`/search?query=${brand}`);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/search?query=${query}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error('Failed to fetch search results');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div>
      <Navbar />
      {loading && <Loading />}
      <div className="flex gap-[2%] py-4 px-[5%]">
        <div className="h-auto hidden md:flex w-[11%] bg-gray-50 ">
          <aside className="w-full h-full shadow p-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Filter by</h2>
              <div className="flex flex-col space-y-2">
                <button
                  className={`flex text-[14px] py-2 ${selectedCategory === 'Microwave' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleCategoryClick('Microwave')}
                >
                  Microwave
                </button>
                <button
                  className={`flex text-[14px] py-2 ${selectedCategory === 'Blender' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleCategoryClick('Blender')}
                >
                  Blender
                </button>
                <button
                  className={`flex text-[14px] py-2 ${selectedCategory === 'Fridge' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleCategoryClick('Fridge')}
                >
                  Fridge
                </button>
                <button
                  className={`flex text-[14px] py-2 ${selectedCategory === 'Cooker' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleCategoryClick('Cooker')}
                >
                  Cooker
                </button>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Featured Brands</h2>
              <div className="flex flex-col space-y-2">
                <button
                  className={`flex text-[14px] py-2 ${selectedBrand === 'Von' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleBrandClick('Von')}
                >
                  Von
                </button>
                <button
                  className={`flex text-[14px] py-2 ${selectedBrand === 'Mika' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleBrandClick('Mika')}
                >
                  Mika
                </button>
                <button
                  className={`flex text-[14px] py-2 ${selectedBrand === 'Hisense' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleBrandClick('Hisense')}
                >
                  Hisense
                </button>
                <button
                  className={`flex text-[14px] py-2 ${selectedBrand === 'Ramtons' ? 'text-black font-medium' : 'text-gray-400'}`}
                  onClick={() => handleBrandClick('Ramtons')}
                >
                  Ramtons
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Price Range</h2>
              <div className="flex flex-col space-y-2">
                <input
                  type="number"
                  className="border py-2 px-4 rounded"
                  placeholder="Min Price"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })}
                />
                <input
                  type="number"
                  className="border py-2 px-4 rounded"
                  placeholder="Max Price"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })}
                />
              </div>
            </div>
          </aside>
        </div>
        <div className=''>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {searchResults.map((product) => (
                <Link to={`/products/${product._id}`} key={product.id} className="flex hover:border-gray-400 cursor-pointer w-full md:w-[250px] flex-col justify-between gap-[2%] border shadow-md">
                  <div className="flex flex-col">
                    <img className='w-full' src={product.images[0]} alt={product.name} />
                    <div className="w-full flex p-2 justify-end gap-2">
                      <MdVerified />
                      <FaRegHeart />
                      <IoMdShare />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-black text-[14px]">{product.title}</p>
                    <p className="text-[16px] font-medium text-gray-700 py-2">Ksh {product.price.toLocaleString("KES")}</p>
                    <button onClick={() => addToCart(product)} className="w-full py-2 bg-black text-white text-[14px] flex items-center justify-center mb-2">Add to Cart <span className="ml-2">|</span> <FaCartArrowDown className='ml-2' /></button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No products found. Please try again.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchedProducts;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SellerRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [shopName, setShopName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [location, setLocation] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign Up clicked');
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-white">
      <div className="bg-white p-8 shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Join us and Start Selling!</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2 text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="shopName" className="block text-sm font-semibold mb-2 text-gray-700">Shop/Business Name</label>
            <input
              type="text"
              id="shopName"
              className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your shop/business name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="businessType" className="block text-sm font-semibold mb-2 text-gray-700">Business Type</label>
            <input
              type="text"
              id="businessType"
              className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your business type"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-sm font-semibold mb-2 text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-700">Already have an account?</p>
          <Link to='/accounts/login' className="text-black underline">Log In here</Link>
        </div>
      </div>
    </div>
  )
}

export default SellerRegister

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SellerLogin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked');
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-white">
      <div className="bg-white p-8 shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
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
          <button
            type="submit"
            className="w-full bg-black text-white py-2 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-700">Don't have an account?</p>
          <Link to='/sell/sign-up' className="text-black underline">Sign Up here</Link>
        </div>
      </div>
    </div>
  )
}

export default SellerLogin

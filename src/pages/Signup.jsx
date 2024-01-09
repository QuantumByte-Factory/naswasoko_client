import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-white">
            <div className="bg-white p-8 shadow-md w-full sm:w-96">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Create an Account</h2>
                <form>
                    <div className="mb-6">
                        <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-gray-900">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-900">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 hover:bg-gray-800 transition duration-300"
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
    );
};

export default SignUp;

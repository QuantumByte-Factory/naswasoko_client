import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://naswa.onrender.com/api/v1/users', {
                fullName,
                email,
                phoneNumber,
                password,
            });
            const token = response.data.token;

            localStorage.setItem('token', token);

           navigate('/')
        } catch (error) {
            if (error.response) {
                console.error('Registration failed:', error.response.data.error);
            } else if (error.request) {
                console.error('No response received from the server');
            } else {
                console.error('Error during registration:', error.message);
            }
        }
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-white">
            <div className="bg-white p-8 shadow-md w-full sm:w-96">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Create an Account</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-6">
                        <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-gray-900">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            id="fullName"
                            className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            id="phoneNumber"
                            className="w-full border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-black transition duration-300"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-900">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

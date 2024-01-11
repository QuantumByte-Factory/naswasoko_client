import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/v1/login', {
                email,
                password,
            });

            // Assuming your server returns the access token in the response
            const token = response.data.token;

            // Store the token in localStorage or a state management solution
            localStorage.setItem('token', token);

            navigate('/')
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // other than 2xx
                console.error('Login failed:', error.response.data.error);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from the server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error during login:', error.message);
            }
        }
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
                    <Link to='/accounts/sign-up' className="text-black underline">Sign Up here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

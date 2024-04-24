// Checkout.js
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import axios from 'axios';  // Import Axios
import Navbar from '../components/Navbar';
import { useUser } from '../UserContext';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const user = useUser();
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePlaceOrder = async () => {
        const orderData = {
            products: cartItems.map(item => ({ product: item._id, quantity: item.quantity })),
            location,
            phoneNumber,
            email,
            user: user._id,
        };        

        try {
            const response = await axios.post('https://naswa.onrender.com/api/v1/orders', orderData);

            if (response.status === 201) {
                navigate('/orders')
                clearCart();
            } else {
                console.error('Failed to place the order');
                setError('Failed to place the order');
            }
        } catch (error) {
            console.error('Error placing order:', error.message);
            setError('Error placing order. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mx-auto px-[5%] py-8">
                <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                                className="w-full px-3 py-2 border focus:outline-none focus:border-black"
                                placeholder="City, Country"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                className="w-full px-3 py-2 border focus:outline-none focus:border-black"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border focus:outline-none focus:border-black"
                                placeholder="Email"
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-medium">Ksh {item.price.toLocaleString('en-US')}</p>
                            </div>
                        ))}
                        <hr className="my-4" />
                        <p className="text-gray-500 0text-[15px]">Note:Delivery charges may apply based on location.</p>
                        <div className="flex justify-between">
                            <p className="font-semibold">Total:</p>
                            <p className="font-semibold">Ksh {calculateTotal().toLocaleString('en-US')}</p>
                        </div>
                        <button onClick={handlePlaceOrder} className="w-full bg-black text-white px-4 py-2 transition duration-300 focus:outline-none mt-4">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;

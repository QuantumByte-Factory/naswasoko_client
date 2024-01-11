// Checkout.js
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePlaceOrder = async () => {
        // Implement order placement logic here
        // You can use a backend API to process the order
        const orderData = {
            name,
            email,
            phoneNumber,
            location,
            items: cartItems,
        };

        try {
            const response = await fetch('http://your-api-endpoint/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                // Order placed successfully, you may want to show a success message
                console.log('Order placed successfully!');
                // Clear the cart after successful order placement
                clearCart();
            } else {
                console.error('Failed to place the order');
                // Handle error scenario, show an error message to the user
            }
        } catch (error) {
            console.error('Error placing order:', error);
            // Handle error scenario, show an error message to the user
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mx-auto px-[5%] py-8">
                <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <form onSubmit={(e) => e.preventDefault()} className="mx-auto p-6 bg-gray-100">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border focus:outline-none focus:border-black"
                                    placeholder="John Doe"
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
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border focus:outline-none focus:border-black"
                                    placeholder="+254 00 000-000"
                                />
                            </div>
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
                            <button onClick={handlePlaceOrder} className="w-full bg-black text-white px-4 py-2 transition duration-300 focus:outline-none">
                                Place Order
                            </button>
                        </form>

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
                        <div className="flex justify-between">
                            <p className="font-semibold">Total:</p>
                            <p className="font-semibold">Ksh {calculateTotal().toLocaleString('en-US')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;

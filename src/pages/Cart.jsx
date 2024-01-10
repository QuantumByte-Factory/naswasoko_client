import React from 'react';
import { useCart } from '../CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
    const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleDecrease = (productId) => {
        decreaseQuantity(productId);
    };

    const handleIncrease = (productId) => {
        increaseQuantity(productId);
    };

    return (
        <div>
            <Navbar />
            <div className="mx-auto px-[5%] py-8">
                <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Product</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Price</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Quantity</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item._id}>
                                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={item.images[0]} alt={item.title} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Ksh {item.price.toLocaleString('en-US')}</td>
                                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <button onClick={() => handleDecrease(item._id)} className="bg-gray-200 px-2 py-1 mr-2">-</button>
                                                {item.quantity}
                                                <button onClick={() => handleIncrease(item._id)} className="bg-gray-200 px-2 py-1 ml-2">+</button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                            <button onClick={() => handleRemove(item._id)} className="text-red-500">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;

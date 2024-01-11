import React from 'react';
import { useCart } from '../CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
// const { Client, MessageMedia } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');
// const { useCart } = require('../CartContext');

const Cart = () => {
    const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
    const navigate = useNavigate();

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleDecrease = (productId) => {
        decreaseQuantity(productId);
    };

    const handleIncrease = (productId) => {
        increaseQuantity(productId);
    };

    // Calculate the total price of the cart
    const cartTotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const handleWhatsAppCheckout = async () => {
        // const { cartItems } = useCart();

        // const client = new Client();

        // client.on('qr', (qrCode) => {
        //     // Display the QR code and ask the user to scan it with their WhatsApp
        //     qrcode.generate(qrCode, { small: true });
        // });

        // client.on('ready', async () => {
        //     try {
        //         // Replace with the actual store owner's phone number
        //         const storeOwnerPhoneNumber = 'store_owner_phone_number';

        //         // Create a message body with the items in the cart
        //         const messageBody = `New order! Items:\n${cartItems.map(item => `${item.title} - ${item.quantity}`).join('\n')}`;

        //         // Send a WhatsApp message to the store owner
        //         await client.sendMessage(`whatsapp:${storeOwnerPhoneNumber}@c.us`, messageBody);

        //         // Log success
        //         console.log('WhatsApp message sent successfully.');

        //         // Disconnect the client after sending the message
        //         client.destroy();
        //     } catch (error) {
        //         // Log and handle errors
        //         console.error('Error sending WhatsApp message:', error);
        //     }
        // });

        // client.initialize();
    };

    // HAALFS2J23P26EMM9CKLMUQR

    const handleInAppCheckout = () => {
        navigate('/checkout')
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
                            <tfoot>
                                <tr>
                                    <td colSpan="2" className="border-t border-gray-300"></td>
                                    <td className="px-6 py-3 border-t border-gray-300 text-left font-semibold text-sm">Total:</td>
                                    <td className="px-6 py-3 border-t border-gray-300 text-left font-semibold text-sm">Ksh {cartTotal.toLocaleString('en-US')}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="border-t border-gray-300 py-4">
                                        <button onClick={handleWhatsAppCheckout} className="bg-green-500 text-white px-4 py-2 mr-4">
                                            Order via WhatsApp
                                        </button>
                                        <button onClick={handleInAppCheckout} className="bg-black text-white px-4 py-2">
                                            Place Order Here
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;

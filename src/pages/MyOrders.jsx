import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`https://naswa.onrender.com/api/v1/orders/user/${id}`);
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, [id]);

    return (
        <div>
            <Navbar />
            <div className="mx-auto px-[5%] py-8">
                <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {orders.length === 0 ? (
                            <p>No orders found.</p>
                        ) : (
                            <ul>
                                {orders.map((order) => (
                                    <li key={order._id} className="border rounded p-4 mb-4">
                                        <h2 className="text-lg font-semibold mb-2">Order ID: {order._id}</h2>
                                        <p>Location: {order?.location}</p>
                                        <p>Total: Ksh {order?.totalAmount}</p>
                                        {/* Add more details or customize as needed */}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyOrders;

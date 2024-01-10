// CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on initial load
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Save cart items to localStorage whenever cartItems change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item._id === product._id);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };


    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item._id !== productId);
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex(item => item._id === productId);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            if (updatedCartItems[existingItemIndex].quantity > 1) {
                updatedCartItems[existingItemIndex].quantity -= 1;
                setCartItems(updatedCartItems);
            } else {
                removeFromCart(productId);
            }
        }
    };

    const increaseQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex(item => item._id === productId);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                decreaseQuantity,
                clearCart,
                increaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

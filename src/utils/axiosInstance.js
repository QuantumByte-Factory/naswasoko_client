import axios from 'axios';

const axiosProducts = axios.create({
    baseURL: 'https://api.example.com/products', // Replace with your product API base URL
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json', // Default content type for requests
   },
});

// Optional: Add interceptors for request and response handling
axiosProducts.interceptors.request.use(
    (config) => {
        // Modify request config before sending (e.g., adding authentication token)
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

axiosProducts.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle error responses (e.g., globally handle unauthorized errors)
        return Promise.reject(error);
    }
);

export default axiosProducts;

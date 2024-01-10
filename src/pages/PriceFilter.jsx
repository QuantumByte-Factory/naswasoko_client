import React, { useState } from 'react';
import axios from 'axios'; // Assuming you use Axios for HTTP requests

const ProductFilter = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleFilter = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/products/filter-by-price?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            setFilteredProducts(response.data);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    };

    return (
        <div>
            <h2>Filter Products by Price Range</h2>
            <div>
                <label htmlFor="minPrice">Min Price:</label>
                <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maxPrice">Max Price:</label>
                <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <button onClick={handleFilter}>Filter</button>

            {/* Display filtered products */}
            <div>
                <h3>Filtered Products:</h3>
                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            {product.name} - Price: {product.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductFilter;

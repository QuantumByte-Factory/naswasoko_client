import React from 'react';

const Loader = () => {
    return (
        <div className="text-center py-4">
            <div className="loader inline-block"></div>
            <p className="text-gray-500 text-sm">Loading more products...</p>
        </div>
    );
};

export default Loader;

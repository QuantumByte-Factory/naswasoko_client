import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-50 bg-gray-300 z-50">
            <div className="animate-spin rounded-full border-t-4 border-gray-700 h-12 w-12"></div>
            <p className="pt-2 text-gray-700">Processing, Please Wait...</p>
        </div>
    );
};

export default Loading;

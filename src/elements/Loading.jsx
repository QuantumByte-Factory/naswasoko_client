import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-50 bg-gray-300 z-50">
            <div className="animate-bounce">
                <div className="flex items-center justify-center">
                    <div className="h-12 w-12 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin"></div>
                    <div className="h-12 w-12 border-t-4 border-b-4 border-pink-500 rounded-full ml-4 animate-spin"></div>
                    <div className="h-12 w-12 border-t-4 border-b-4 border-blue-500 rounded-full ml-4 animate-spin"></div>
                </div>
            </div>
            <p className="pt-2 text-gray-700">Processing, Please Wait...</p>
        </div>
    );
};

export default Loading;

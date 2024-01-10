import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-50 bg-gray-300 z-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
            <p className="pt-2">Proccessing, Please Wait</p>
        </div>
    );
};

export default Loading;

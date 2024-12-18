import React from "react";

const Loader = ({ message = "Loading..." }) => {
    return (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center rounded-lg z-10">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-t-transparent border-indigo-600 rounded-full animate-spin"></div>
                <span className="text-sm font-medium text-indigo-600">{message}</span>
            </div>
        </div>
    );
};

export default Loader;

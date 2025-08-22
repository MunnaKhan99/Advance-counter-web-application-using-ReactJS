import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Counter = () => {
    const [count, setCount] = useState(0);


    const handleIncreament = () => {
        setCount(count + 1);
    }

    const handleDecreament = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className=' flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500'>
            <div className='bg-white shadow-2xl p-10 w-96 text-center'>
                <h1 className='text-3xl font-bold text-gray-800 m-6'>Counter App</h1>
                <div className={` text-6xl font-extrabold mb-6 transition-all duration-300  ${count > 0 ? 'text-green-600' : count < 0 ? 'text-red-600' : 'text-gray-700'}`}>
                    {count}

                </div>
                <div className='flex justify-between gap-4'>
                    {/* increment button */}
                    <button onClick={handleDecreament} className='flex-1 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl shadow-lg transition-all duration-300'><FaMinus /></button>

                    {/* Reset button */}
                    <button onClick={handleReset} className='flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl shadow-lg transition-all duration-300'>Reset</button>

                    {/* Decrement button */}
                    <button onClick={handleIncreament} className='flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600
                     text-white py-3 rounded-xl shadow-lg transition-all duration-300'><FaPlus /></button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Counter = () => {
    const [count, setCount] = useState(()=>{
        const saved = localStorage.getItem("counterValue");
        return saved !== null ?Number(saved):0;
    });
    const [step,setStep] = useState(1);

    // after loading component the value will load form localstorage
    // useEffect(()=>{
    //     const savedCount = localStorage.getItem("counterValue");
    //     if(savedCount !== null){
    //         setCount(Number(savedCount));
    //     }
    // },[]);
    useEffect(()=>{
        localStorage.setItem("counterValue",count);
    },[count]);

    const handleIncreament = () => {
        if(count + step <=100){
            setCount(count+step)
        }
    }

    const handleDecreament = () => {
        if(count - step >=0){
            setCount(count-step)
        }
    }

    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className=' flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500'>
            <div className='bg-white shadow-2xl p-10 w-96 text-center'>
                <h1 className='text-3xl font-bold text-gray-800 m-6'>Counter App</h1>

                <div className={` text-6xl font-extrabold mb-6 transition-all duration-300  ${count > 50 ? 'text-green-600' : count < 50 ? 'text-red-600' : 'text-gray-700'}`}>
                    {count}

                </div>

                <input 
                type="number"
                value={step}
                onChange={(e) =>{
                    const value = e.target.value;
                    setStep(value === "" ? 1: Number(value));
                }}  
                className='border p-2 mb-4 text-center'
                placeholder="5"/>

                <div className='flex justify-between gap-4'>
                    {/* increment button */}
                    <button onClick={handleDecreament} 
                    disabled={count-step < 0}
                    className={`flex-1 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl shadow-lg transition-all duration-300 ${count-step < 0 ? 'cursor-not-allowed':'bg-red-500'}`}><FaMinus /></button>

                    {/* Reset button */}
                    <button onClick={handleReset} className='flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl shadow-lg transition-all duration-300'>Reset</button>

                    {/* Decrement button */}
                    <button onClick={handleIncreament}
                    disabled={count + step > 100}
                    className={`flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600
                     text-white py-3 rounded-xl shadow-lg transition-all duration-300 ${count - step > 100 ? 'bg-gray-400 cursor-not-allowed':'bg-green-500 hover:bg-green-600'}`}><FaPlus /></button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
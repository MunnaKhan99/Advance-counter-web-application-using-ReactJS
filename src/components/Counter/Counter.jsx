import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] =useState(0);


    const handleIncreament = ()=>{
        setCount(count+1);
    }
    
    const handleDecreament = ()=>{
        setCount(count-1);
    }
    
    const handleReset = ()=>{
        setCount(0);
    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className='bg-slate-300 p-20'>
                <h1 className='text-4xl'>Counter App</h1>
                <div>
                    Count: <strong>{count}</strong>
                </div>
                <div>
                    <button onClick={handleDecreament} className='btn '>-</button>
                    <button onClick={handleReset} className='btn'>Reset</button>
                    <button onClick={handleIncreament} className='btn'>+</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
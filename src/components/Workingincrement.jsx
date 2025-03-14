import React, { useState } from 'react';

export default function Workingincrement() {
    const [i, setI] = useState(0);

    const increment = () => {
        setI(i + 5);  
    };

    const decrement = () => {
        setI(i - 5);  
    };

    return (
    
        <>
        <div className="h-[600px] w-full bg-black text-white text-2xl 
        text-center pt-[200px]">

       
            <h1>Working with Event</h1>
            <div>
                <input type="button" value="+5" className='border-2 p-2' onClick={increment} />
                {i}
                <input type="button" value="-5" className='border-2 p-2' onClick={decrement} />
            </div>
            </div>
        </>
    );
}
import React, { useEffect, useState } from 'react';

function Counter(props) {
    let target = parseInt(props.target);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === target) {
            return;
        }

        const interval = 2000/target;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev < target) {
                    return prev + 1; 
                } else {
                    clearInterval(timer);
                    return prev;
                }
            });
        }, interval);


        return () => clearInterval(timer);

    }, [count, target]);

    return (
        <div className='font-[Poppins] font-bold flex backdrop-blur-sm bg-white/5 p-4 border-1 rounded-2xl ring-1 ring-white flex-col items-center justify-center text-center'>
            <p className='text-2xl p-2 py-4 font-bold text-yellow-500'>{count} +</p>
            <h1 className='text-md p-2 py-4  text-[#F3F4F6]'>{props.label}</h1>
        </div>
    );
}

export default Counter;

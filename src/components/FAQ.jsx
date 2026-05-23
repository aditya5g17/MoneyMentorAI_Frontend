import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FAQSection() {
   
    const faqs = [
        {
            question: 'What is Money Mentor AI?',
            answer: 'Money Mentor AI is an intelligent platform that helps you achieve your financial goals with Personalised guide and mentoring'
        },
        {
            question: 'How does Money Mentor AI work?',
            answer: 'The platform uses AI algorithms to analyze your financial data and offers insights, tips, and progress tracking to help you meet your financial targets.'
        },
        {
            question: 'Is my data secure on this platform?',
            answer: 'Yes, we prioritize your privacy. We used the https: which is secure.'
        },
        {
            question: 'Is the platform free to use?',
            answer: 'Money Mentor AI offers a free version with basic features, News and an chatbot for your assistance.'
        }
    ];

    const[active, setActive] = useState(Array(5).fill('false'));

    function EventHandler (idx) {
        let newArray = [...active];
        if(newArray[idx] === 'true') {
            newArray[idx] = 'false';
        } else {
            newArray[idx] = 'true';
        }
        setActive(newArray);
    }

    const { ref, inView } = useInView ({
    triggerOnce:false,
    threshold:0,
  })

    return (
        <Motion.section className='max-w-[1080px] mx-auto px-4 font-[Poppins] text-[#F3F4F6]'
        ref= {ref}
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:1.25, ease:'anticipate'}}>
            <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
            <h1 className='mt-10 text-center font-bold text-3xl'>FAQ'S</h1>

            <div>
            {
                faqs.map((elem, idx) => (
                    <div key={idx} className='ring-gray-700 justify-between flex gap-4 ring-2 px-4 py-3 items-start max-w-[800px] mx-auto rounded-2xl my-3 bg-gray-800 sm:px-5 sm:items-center'>
                        <div className='min-w-0'>
                        <h1 className='font-bold text-lg' > {elem.question}</h1>
                        <br />
                        <div className='text-[#8B949E]'>
                        {
                            active[idx] === 'true' ? elem.answer : <div></div>
                        }
                        </div>
                        </div>
                        <button className='font-bold cursor-pointer text-2xl shrink-0'
                        onClick={ () => EventHandler(idx)}> {active[idx]==='true' ? '-' : '+'}  </button>
                    </div>
                ))
            }
            </div>
        </Motion.section>
    );
}

export default FAQSection;

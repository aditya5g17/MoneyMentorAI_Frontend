import React from 'react';
import { motion as Motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import MMLogo from '../assets/icons/MMLogo.png'
const scroll = ( ref ) => {
  if (!ref || !ref.current) return;
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function Navbar( {homeRef, workRef, aboutusRef, featuresRef, faqRef, marketNewsRef} ) {

  const { ref } = useInView({
    threshold:0.8,
    triggerOnce:false,
  })

  return (
    <Motion.div
    ref={ref}
     className='relative flex flex-col gap-4 font-[Poppins] items-center border-b-[0.5px] px-4 py-4 border-[#374151] sm:min-h-24 sm:justify-center sm:px-6 lg:px-10'>

      <div className='flex w-full justify-center sm:absolute sm:left-6 sm:top-1/2 sm:w-auto sm:-translate-y-1/2 sm:justify-start lg:left-10'>
       <Motion.img src={MMLogo} alt="Money Mentor Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className='w-32 sm:w-36 lg:w-44'/>
      </div>
      <Motion.div className='flex w-full justify-center'
      initial={{opacity:0}}
      animate={{scale:1, opacity:1}}
        transition={{duration:1.5,delay:0.3, ease:'easeInOut'}}>
        <div className='items-center rounded-2xl bg-slate-500/80 backdrop-blur-2xl w-full max-w-[680px] text-[#E6EDF3] sm:rounded-full'>
          <ul className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 text-sm sm:min-h-12 sm:gap-x-6 sm:text-base'>
            <li className='font-semibold cursor-pointer hover:underline' onClick={()=>scroll(homeRef)}>Home</li>
            <li className='font-semibold cursor-pointer hover:underline' onClick={() => scroll(marketNewsRef)}>News</li>
            <li className='font-semibold cursor-pointer hover:underline' onClick={()=>scroll(featuresRef)} >Features</li>
            <li className='font-semibold cursor-pointer hover:underline' onClick={()=>scroll(workRef)} >Work Flow</li>
            <li className='font-semibold cursor-pointer hover:underline' onClick={()=>scroll(faqRef)} >FAQ'S</li>
            <li className='font-semibold cursor-pointer hover:underline' onClick={()=>scroll(aboutusRef)} >AboutUs</li>
          </ul>
        </div>
      </Motion.div>
      {/* News is handled by the HeroSection / App; Navbar now scrolls to the market news button */}
    </Motion.div>
  );
}

export default Navbar;

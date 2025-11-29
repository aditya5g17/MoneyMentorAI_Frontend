import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import MMLogo from '../assets/icons/MMLogo.png'
const scroll = ( ref ) => {
  if (!ref || !ref.current) return;
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function Navbar( {homeRef, workRef, aboutusRef, featuresRef, faqRef, marketNewsRef} ) {

    const [isMoved, setIsMoved] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoved(true);
    }, 1000); // Delay before moving the logo into place
    return () => clearTimeout(timer);
  }, []);
  

  const { ref, inView } = useInView({
    threshold:0.8,
    triggerOnce:false,
  })

  return (
    <motion.div
    ref={ref}
     className='flex  font-[Poppins] items-center border-b-[0.5px] py-4 pb-8 border-[#374151]'>

      <div className='w-23 h-14 mr-50'>
       <motion.img src={MMLogo} alt="Money Mentor Logo"
        initial={{
          position: 'absolute',
          top: '50%',
          left: '45%',
          scale: 3,
        }}
        animate={{
          top: isMoved ? '-40px' : '50%',
          left: isMoved ? '0px' : '45%',
          scale: isMoved ? 1 : 3,
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ zIndex: 1000, position: 'fixed', width: '180px' }}/>
      </div>
      <motion.div className='flex justify-center'
      initial={{opacity:0}}
      animate={{scale:1, opacity:1}}
        transition={{duration:1.5,delay:2, ease:'easeInOut'}}>
        <div className='#161B22  items-center rounded-full bg-slate-500 backdrop-blur-2xl w-[650px] text-[#E6EDF3]'>
          <ul className='flex  h-12  items-center rounded-full'>
            <li className='m-4 hover:scale-110 transition-transform ml-14 font-semibold cursor-pointer hover:underline' onClick={()=>scroll(homeRef)}>Home</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={() => scroll(marketNewsRef)}>News</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(featuresRef)} >Features</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(workRef)} >Work Flow</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(faqRef)} >FAQ'S</li>
            <li className='m-4 hover:scale-110 transition-transform mr-14 font-semibold cursor-pointer hover:underline' onClick={()=>scroll(aboutusRef)} >AboutUs</li>
          </ul>
        </div>
      </motion.div>
      <motion.div className='cursor-pointer '
      initial={{opacity:0}}
      animate={{scale:1, opacity:1}}
        transition={{duration:1.5,delay:2, ease:'easeInOut'}}
      >
      </motion.div>
      {/* News is handled by the HeroSection / App; Navbar now scrolls to the market news button */}
    </motion.div>
  );
}

export default Navbar;

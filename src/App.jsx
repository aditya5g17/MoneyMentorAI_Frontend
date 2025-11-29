import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChooseUs from './components/ChooseUs';
import Work from './components/Work';
import Footer from './components/Footer';
import StatsSection from './components/Stats';
import FAQSection from './components/FAQ';
import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { NavLink, Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import News from './components/News.jsx';

function App() {


  const [mousePointer, setMousePointer] = useState({
    x:0,
    y:0,
  })

  useEffect(()=>{
    const handleMouseMove = e => {
      setMousePointer({
        x:e.clientX,
        y:e.clientY,
      });
    }


    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])

  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutusRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const marketNewsRef = useRef(null);

  const cursor = {
      position: 'fixed',
      top: mousePointer.y,
      left: mousePointer.x,
      width: '80px',
      height: '80px',
      backgroundColor: '#60A5FA', 
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      opacity: 1,
      filter: 'blur(80px)',
      pointerEvents: 'none',
      transition: 'top 0.01s linear, left 0.01s linear',
  }

  const [chatBotEnabled, setChatBotEnabled] = useState(false);
  const [showNews, setShowNews] = useState(false);
  return (
    <div className=' font-[Poppins] '>
      <div className='' style={cursor}></div>
      <div className='bg-no-repeat bg-cover  bg-[url("https://media.istockphoto.com/id/2030192156/photo/global-data-flow-and-connectivity-east-asia.webp?b=1&s=612x612&w=0&k=20&c=igZA6fE1A6qq0jyHDRUAxtbuHeQu2pqiRTdr4t2BPfI=")]'>
        <div className=''>
          <Navbar homeRef={homeRef} workRef={workRef} aboutusRef={aboutusRef} featuresRef={featuresRef} faqRef={faqRef} marketNewsRef={marketNewsRef} /> 
        </div>        
        <div id='homeRef' ref={homeRef}><HeroSection marketNewsRef={marketNewsRef} setShowNews={setShowNews} />
        </div>
      </div>

      <motion.button
        animate={{ 
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998
        }}
        className='w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center cursor-pointer group relative overflow-hidden'
        onClick={() => setChatBotEnabled(true)}
        aria-label="Open chat"
      >
        {/* Animated background pulse */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Robot face icon with eyes and smile */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24"
          className="relative z-10 group-hover:scale-110 transition-transform duration-300"
          fill="none"
        >
          {/* Robot head */}
          <rect x="4" y="6" width="16" height="12" rx="2.5" fill="white" stroke="none"/>
          {/* Left eye - larger and friendly */}
          <circle cx="9.5" cy="11" r="2.5" fill="white"/>
          <circle cx="10" cy="10.5" r="1.3" fill="#3b82f6"/>
          {/* Right eye - larger and friendly */}
          <circle cx="14.5" cy="11" r="2.5" fill="white"/>
          <circle cx="15" cy="10.5" r="1.3" fill="#3b82f6"/>
          {/* Smile - curved and friendly */}
          <path 
            d="M 8.5 15.5 Q 12 18 15.5 15.5" 
            stroke="#3b82f6" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none"
          />
          {/* Antenna */}
          <circle cx="12" cy="6" r="1" fill="white"/>
          <line x1="12" y1="4" x2="12" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.button>  
      {
        
        chatBotEnabled && 
        ( <div className='fixed' style={{ bottom: '20px', right: '24px', width: '420px', height: '550px', zIndex: 9999 }}>
          <Chatbot forceOpen={true} onClose={() => setChatBotEnabled(false)} />
          </div>
        )
      }

      <div className='bg-gradient-to-b mt-0 from-[#0c121b] to-[rgb(31,41,55)]'>
        <div id='featuresRef' ref={featuresRef}><ChooseUs /></div>
        {showNews && <News onClose={() => setShowNews(false)} />}
        <StatsSection />
        <div id='workRef' ref={workRef}><Work /></div>
        <div ref={faqRef} id='faqRef'><FAQSection /></div>
        <div id='aboutusRef' ref={aboutusRef}><Footer /></div>
      </div>
    </div>
  )
}

export default App

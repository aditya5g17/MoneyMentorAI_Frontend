import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function HeroSection({ marketNewsRef, setShowNews }) {

  const { ref, inView } = useInView ({
    triggerOnce:true,
    threshold:0,
  })
 
  return (
    <motion.div 
    ref= {ref}
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:0.5,delay:2, ease:'easeInOut'}}
    className='w-[1020px] font-[Poppins] mx-auto rounded-2xl
      opacity-[80%] border-b-[0.5px] border-[#374151] pb-10'
    >
      <div className="bg-[rgba(0,0,0,0.5)] rounded-2xl px-4 h-[100%] font-[Poppins] flex items-center justify-center flex-col mt-4">
        <h1 className="mt-4 pt-8 text-center text-6xl text-[#ffffff] font-bold">
          Your AI-Powered Financial Guide
        </h1>
        <h3 className="text-center text-3xl pt-8 text-[#E6EDF3] font-bold">
          Simplify your investment journey with state-of-the-art AI technology
          and achieve financial independence.
        </h3>
        <div className="mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 hover:shadow-[inset_0px_0px_6px_white] backdrop-blur-md border border-white/20 shadow-sm hover:shadow-blue-500  rounded-2xl p-6  hover:border-blue-500 transition">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                  Stay Updated
                </h3>
                <p className="text-[#9CA3AF] text-sm">
                  Get real-time financial news updates
                  <br />
                  <span className="text-[#3B82F6] font-semibold">200+ News</span>
                </p>
              </div>

              <div className="bg-white/10 hover:shadow-[inset_0px_0px_6px_white] backdrop-blur-md rounded-2xl p-6 border border-[#374151] shadow-sm hover:shadow-indigo-400 hover:border-indigo-400 transition">
                <div className="text-4xl mb-4">🧠</div>
                <motion.h3 className="text-xl font-bold
                 text-[#F3F4F6] mb-2"
                 >
                  AI-Powered Analysis
                </motion.h3>
                <p className="text-[#9CA3AF] text-sm">
                  Smart insights for smarter decisions
                  <br />
                  <span className="text-[#10B981] font-semibold">
                    Great Accuracy
                  </span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md hover:shadow-[inset_0px_0px_6px_white] rounded-2xl p-6 border border-[#374151] shadow-sm hover:shadow-purple-400 hover:border-purple-400 transition">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                  {" "}
                  Secure & Private
                </h3>
                <p className="text-[#9CA3AF] text-sm">
                  Secure login and Authentication System
                  <br />
                  <span className="text-[#8B5CF6] font-semibold">
                    100% encrypted
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 px-22 py-8">
            <p className=" text-2xl font-bold  text-[#E6EDF3]">"Take control of your financial future with the power of AI. Stay informed, make smarter decisions, and unlock new opportunities — all in one place."</p>
          <div className="flex items-center justify-center mt-10">
          <Link
          to={'https://moneymentor-ai.streamlit.app/'}
          className="ring-2 ring-[#9cafce] text-[#E6EDF3] transition-transform hover:scale-110 m-4 bg-[#3B82F6] px-12 py-3 rounded-2xl cursor-pointer text-center font-bold items-center text-base">
            Get Started
          </Link>
          <button ref={marketNewsRef} className="ring-2 ring-[#9cafce] text-[#E6EDF3] transition-transform hover:scale-110 m-4 bg-[#3B82F6] px-12 py-3 rounded-2xl cursor-pointer text-center font-bold items-center text-base" onClick={() => setShowNews(true)}>
            market News
          </button>
          </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;

import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function HeroSection({ marketNewsRef, setShowNews }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
      className="w-full max-w-[1020px] font-[Poppins] mx-auto rounded-2xl opacity-[80%] border-b-[0.5px] border-[#374151] px-4 pb-8 sm:px-6 sm:pb-10"
    >
      <div className="bg-[rgba(0,0,0,0.5)] rounded-2xl px-4 h-full font-[Poppins] flex items-center justify-center flex-col mt-4 sm:px-6">
        <h1 className="mt-4 pt-8 text-center text-4xl text-white font-bold leading-tight sm:text-5xl lg:text-6xl">
          Your AI-Powered Financial Guide
        </h1>
        <h3 className="text-center text-lg pt-6 text-[#E6EDF3] font-bold leading-relaxed sm:text-2xl lg:text-3xl lg:pt-8">
          Simplify your investment journey with state-of-the-art AI technology
          and achieve financial independence.
        </h3>

        <div className="mt-6 w-full sm:mt-8">
          <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:mt-12">
              <div className="bg-white/10 hover:shadow-[inset_0px_0px_6px_white] backdrop-blur-md border border-white/20 shadow-sm hover:shadow-blue-500 rounded-2xl p-6 hover:border-blue-500 transition">
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
                <Motion.h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                  AI-Powered Analysis
                </Motion.h3>
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

          <div className="mt-8 px-0 py-6 sm:px-8 lg:px-22 lg:py-8">
            <p className="text-center text-lg font-bold leading-relaxed text-[#E6EDF3] sm:text-xl lg:text-2xl">
              "Take control of your financial future with the power of AI. Stay informed, make smarter decisions, and unlock new opportunities - all in one place."
            </p>
            <div className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-0 lg:mt-10">
              <Link
                to="https://moneymentor-ai.streamlit.app/"
                className="ring-2 ring-[#9cafce] text-[#E6EDF3] transition-transform hover:scale-105 sm:hover:scale-110 sm:m-4 bg-[#3B82F6] px-8 py-3 rounded-2xl cursor-pointer text-center font-bold items-center text-base sm:px-12"
              >
                Get Started
              </Link>
              <button
                ref={marketNewsRef}
                className="ring-2 ring-[#9cafce] text-[#E6EDF3] transition-transform hover:scale-105 sm:hover:scale-110 sm:m-4 bg-[#3B82F6] px-8 py-3 rounded-2xl cursor-pointer text-center font-bold items-center text-base sm:px-12"
                onClick={() => setShowNews(true)}
              >
                Market News
              </button>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}

export default HeroSection;

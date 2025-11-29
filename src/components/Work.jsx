import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Work() {

  const { ref, inView } = useInView ({
    triggerOnce:false,
    threshold:0,
  })

  return (
    <motion.section 
    ref= {ref}
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:1, ease:'anticipate'}}className="py-16 mt-8 max-w-[1080px] font-[Poppins] mx-auto text-[#E6EDF3]">
       <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
      <div className="max-w-6xl mx-auto px-4  mt-12">
        
        <h2 className="text-4xl font-bold text-center mb-6">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border border-[#30363D] rounded-full w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=200&fit=crop&q=80" 
                alt="Trends Chart" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">See Trends</h3>
            <p className="text-[#8B949E] max-w-xs">
              Explore real-time financial news, market trends, and AI-powered insights.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border border-[#30363D] rounded-full w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&q=80" 
                alt="Investment" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Invest Smartly</h3>
            <p className="text-[#8B949E] max-w-xs">
              Make informed investment decisions with ai powered insights.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border border-[#30363D] rounded-full w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&q=80" 
                alt="Financial Growth" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Become Financially Stable</h3>
            <p className="text-[#8B949E] max-w-xs">
              Now see your investments grow and achieve long-term financial stability.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border border-[#30363D] rounded-full w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop&q=80" 
                alt="AI Chatbot" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chatbot Assistance</h3>
            <p className="text-[#8B949E] max-w-xs">
              Get instant, personalized financial guidance from our AI-powered chatbot.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default Work

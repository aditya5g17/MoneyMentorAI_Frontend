import Counter from "./Counter";
import { motion as Motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {

  const { ref, inView } = useInView ({
    triggerOnce:false,
    threshold:0,
  })

  return (
    <Motion.section className="py-12 max-w-[1080px] mx-auto px-4 pb-0 font-[Poppins]"
     ref= {ref}
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:1.25, ease:'anticipate'}}>
        <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
      <div className="text-center mb-8 mt-12 sm:mt-22">
        <h1 className="text-3xl text-[#F3F4F6] font-bold pt-6 sm:text-4xl lg:text-5xl">Our Impact (Future Vision)</h1>
        <p className="text-gray-600 text-md mt-2">
          *Statistics below are for demonstration purposes only.*
        </p>
      </div>

      <div className="flex justify-center flex-wrap pb-8 py-8">
        {inView && (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <Counter target="500" label="Future Money Mentors Empowered" />
            <Counter target="90" label="Projected User Satisfaction Rate" />
            <Counter target="250" label="Financial Goals to be Achieved Soon" />
          </div>
        )}
      </div>
    </Motion.section>
  );
};

export default StatsSection;

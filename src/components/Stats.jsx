import Counter from "./Counter";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {

  const { ref, inView } = useInView ({
    triggerOnce:false,
    threshold:0,
  })

  return (
    <motion.section className="py-12 max-w-[1080px] mx-auto pb-0 font-[Poppins]"
     ref= {ref}
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:1.25, ease:'anticipate'}}>
        <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
      <div className="text-center mb-8 mt-22">
        <h1 className="text-5xl text-[#F3F4F6] font-bold pt-6 ">Our Impact (Future Vision)</h1>
        <p className="text-gray-600 text-md mt-2">
          *Statistics below are for demonstration purposes only.*
        </p>
      </div>

      <div className="flex justify-center flex-wrap pb-8 py-8">
        {inView && (
          <div className=" flex">
            <Counter target="500" label="Future Money Mentors Empowered" />
            <Counter target="90" label="Projected User Satisfaction Rate" />
            <Counter target="250" label="Financial Goals to be Achieved Soon" />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default StatsSection;

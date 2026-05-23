import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import { Routes, NavLink, Route } from 'react-router-dom';
import { motion as Motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import MMLogo from '../assets/icons/MMLogo.png'
 
function Login() {

    const NavLinkStyle = ({isActive}) => {
        return isActive
        ? 'text-green-600'
        : 'text-black' ;
    }

    const { ref, inView } = useInView({
        threshold:0.8,
        triggerOnce:false,
    })

  return (
    <Motion.div
        ref={ref}
        className='w-full min-h-dvh bg-[#1F2937] font-[Poppins] items-center border-b-[0.5px] pb-8 border-[#374151]'>
    
          <div className='flex justify-center pt-4 sm:justify-start sm:px-6'>
           <Motion.img src={MMLogo} alt="Money Mentor Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.95, ease: 'easeInOut' }}
            className='w-32 sm:w-44'/>
          </div>
    <Motion.div className="w-full flex items-center justify-center bg-[#1F2937] px-4 py-8"
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:0.5, ease:'easeInOut', delay:1.5}}>
      <main className="w-full max-w-[700px] relative rounded-2xl shadow-[#183A39] shadow-lg bg-blue-50 min-h-[500px] mx-auto p-4 sm:p-6" >
            <div className="flex items-center justify-around gap-4 px-2 mt-4 sm:px-6 sm:mt-6">

            <NavLink to={'/Login/Signin'} className={({ isActive }) => `${NavLinkStyle({ isActive })} font-bold text-2xl`}
                > Sign in</NavLink>
                <NavLink to={'/Login/Signup'} className={({ isActive }) => `${NavLinkStyle({ isActive })} font-bold text-2xl`}
                > Sign up</NavLink>
            </div>

            <Routes>
                <Route path='/' element={<Signup />}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/Signin' element={<Signin/>}></Route>
            </Routes>

        </main>

    </Motion.div>
    </Motion.div>
  )
}

export default Login;

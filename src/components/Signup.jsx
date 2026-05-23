import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/app.js';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      setErrorMessage('Sign Up was Successful');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const googleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Sign-In User:", user);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex flex-col gap-4 p-2 mt-8 sm:mt-10">
        <span className="transition-all duration-300 relative flex items-center justify-start space-x-2">
          <i className="fa-solid fa-user py-2 px-2"></i>
          <input
            className="w-full max-w-[360px] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1]"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>

        <span className="relative flex items-center justify-start space-x-2">
          <i className="fa-solid fa-envelope py-2 px-2"></i>
          <input
            className="w-full max-w-[360px] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1]"
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>

        <span className="relative flex items-center justify-start space-x-2">
          <i className="fa-solid fa-lock py-2 px-2 "></i>
          <input
            className="w-full max-w-[360px] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1]"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
      </div>

      <button
        type="button"
        className="w-full max-w-[220px] p-3 mx-auto hover:scale-105 transition-transform duration-100 rounded-2xl bg-green-900 text-white"
        onClick={handleSignUp}
      >
        Continue
      </button>

      <p className='text-center font-bold'>OR</p>

      <button
        type="button"
        className='text-lg font-semibold text-violet-900 hover:underline cursor-pointer sm:text-xl'
        onClick={googleSignin}
      >
        Continue With Google
      </button>

      <img
        src='https://cdn-icons-png.flaticon.com/256/2875/2875404.png'
        alt="Google Symbol"
        className='w-20 mx-auto p-2 pointer-events-none opacity-50 sm:w-24'
      />

      <div className='text-red-600 text-base p-4 text-center'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignUp;

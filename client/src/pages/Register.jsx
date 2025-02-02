import React, { useState } from 'react'
import LoginLogo from '../assets/images/login-page.png'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className='font-rubik w-11/12 mx-auto min-h-screen bg-[#2B2B2B] text-white'>
      <div className='md:flex gap-4 md:p-10'>
        <div className='md:flex justify-center items-center md:w-[50%]'>
          <img className='w-[500px]' src={LoginLogo} alt="Register Logo" />
        </div>
        <div className='p-2 md:w-[50%]'>
          <div className='p-10 md:p-0 space-y-2'>
            <h1 className='text-3xl font-semibold md:text-5xl'>
              <span className='text-[#D7EF43]'>Create</span> Account
            </h1>
            <p className='text-2xl'>Welcome! Enter your details and start creating, collecting, and selling NFTs.</p>
          </div>
          <div>
            <form className="mt-10 text-black">
              {/* Username Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Username" className="input input-bordered rounded-lg" required />
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered rounded-lg" required />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered rounded-lg w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={handlePasswordToggle}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>

              {/* Google login button (Full width) */}
              <div className="form-control mt-6 w-full">
                <button className="btn bg-[#4285F4] text-white flex items-center justify-center w-full py-2 hover:bg-[#357ae8]">
                  <FcGoogle size={20} className="mr-2" />
                  Register with Google
                </button>
              </div>

              {/* Create Account button */}
              <div className="form-control mt-6 w-56">
                <button className="btn bg-[#D7EF43] px-12 text-black hover:bg-[#efff8a] w-full">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

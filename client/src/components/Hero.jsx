import React from 'react'
import banner from '../assets/images/banner.png'
import CountUp from 'react-countup';
import 'animate.css';

const Hero = () => {
  return (
    
    <div className='animate__animated animate__lightSpeedInLeft font-rubik w-11/12 py-12 mx-auto md:flex justify-between md:p-5 lg:p-20  gap-4 text-white '>
      <div className=' md:w-[50%] lg:p-5  space-y-4 '>
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold'>Discover & Collect Unique <span className='text-[#D7EF43]'>NFTs</span></h1>
        <div className='text-xl mt-4'>
        <p>Own digital assets, invest in the future, and connect with other collectors. Explore to see amazing NFTs from around the world.</p>
      </div>
      <div>
        <button className='btn bg-[#D7EF43] px-12 text-black hover:bg-[#edff79]'>Explore</button>
      </div>
      <div className='flex justify-between gap-4'>
        <div>
          <p><CountUp className='text-3xl font-semibold' start={0} end={600}/><span className='text-3xl font-semibold'>K+</span></p>
          <h3>Total State</h3>
        </div>
        <div>
          <p><CountUp className='text-3xl font-semibold' start={0} end={80}/><span className='text-3xl font-semibold'>K+</span></p>
          <h3>Auctions</h3>
        </div>
        <div>
          <p><CountUp className='text-3xl font-semibold' start={0} end={300}/><span className='text-3xl font-semibold'>K+</span></p>
          <h3>Artist</h3>
        </div>
      </div>
      </div>

      <div className='mt-10'>
        <div className='border border-gray-500'>
          <img className='' src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

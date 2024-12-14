import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className='bg-black h-auto'>
        <div className='text-center'>
          <h1 className='text-[4vh]  text-amber-600  '><span className="text-amber-400">Quick</span>Buy</h1>
        </div>
      <div className='flex justify-between h-auto mb-0'>
        <div className='mb-10'>
          <h1 className='text-[2vh] text-white'>Connect with
            us</h1>
          <ul className='flex justify-center flex-col mt-5 items-center'>
            <li className='text-[1vh] inline text-zinc-400'>Facebook </li>
            <li className='text-[1vh] text-zinc-400'>Twitter </li>
            <li className='text-[1vh] text-zinc-400'>Instagram </li>
            <li className='flex gap-1 text-zinc-400'><FaFacebook className='text-blue-700 text-[1vh]'/>
              <FaTwitter className='text-blue-700 text-[1vh]' /> < FaInstagram  className=' text-blue-800 text-[1vh]' /></li>

          </ul>
        </div>
        <div className='mb-10'>
          <h4 className='text-[2vh] text-white'>Make Money with Us</h4>
          <ul className='flex justify-center flex-col mt-5 items-center'>
            <li className='text-[1vh]  text-zinc-400'>Sell on Amazon</li>
            <li className='text-[1vh] text-zinc-400'>supply to Amazon</li>
            <li className='text-[1vh] text-zinc-400'>Become an Affiliate</li>
            <li className='text-[1vh] text-zinc-400'>Advertise Your Products</li>
          </ul>
        </div>
        <div className='mb-10'>
          <h4 className='text-[2vh] text-white'>Let Us Help You</h4>
          <ul className='flex justify-center flex-col mt-5 items-center'>
            <li className='text-[1vh]  text-zinc-400'>Your Account</li>
            <li className='text-[1vh] text-zinc-400'>Returns Center</li>
            <li className='text-[1vh] text-zinc-400'>100% Purchase Protection</li>
            <li className='text-[1vh] text-zinc-400'>Help Center</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

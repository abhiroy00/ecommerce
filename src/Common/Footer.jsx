import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div>
         <div className='w-screen mt-20 flex h-60 bg-black'>
    <div className=' pt-20 flex ml-40  h-20'>
      <h1 className='text-5xl  text-amber-600  '><span className="text-amber-400">Quick</span>Buy</h1>
     </div>
     <div className=' mt-10 table-cell  pl-20'>
     <h1 className='text-2xl text-white'>Connect with 
        us</h1>
      <ul className='flex justify-center flex-col mt-5 items-center'>
        <li className='text-1xl inline text-zinc-400'>Facebook </li>
        <li className='text-1xl text-zinc-400'>Twitter </li>
        <li className='text-1xl text-zinc-400'>Instagram </li>
        <li className='flex pt-4 gap-3 text-zinc-400'><FaFacebook size={30} className='text-blue-700'/>
        <FaTwitter size={30}  className='text-blue-700'/> < FaInstagram size={30} className=' text-blue-800'/></li>
       
      </ul>
        </div>
        <div className=' mt-10  pl-20'>
      <h4 className='text-2xl text-white'>Make Money with Us</h4>
      <ul className='flex justify-center flex-col mt-5 items-center'>
        <li className='text-1xl  text-zinc-400'>Sell on Amazon</li>
        <li className='text-1xl text-zinc-400'>supply to Amazon</li>
        <li className='text-1xl text-zinc-400'>Become an Affiliate</li>
        <li className='text-1xl text-zinc-400'>Advertise Your Products</li>
      </ul>
        </div>
        <div className=' mt-10  pl-20'>
      <h4 className='text-2xl text-white'>Let Us Help You</h4>
      <ul className='flex justify-center flex-col mt-5 items-center'>
        <li className='text-1xl  text-zinc-400'>Your Account</li>
        <li className='text-1xl text-zinc-400'>Returns Center</li>
        <li className='text-1xl text-zinc-400'>100% Purchase Protection</li>
        <li className='text-1xl text-zinc-400'>Help Center</li>
      </ul>
        </div>
        </div>
    </div>
  )
}

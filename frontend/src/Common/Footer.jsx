import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo 12.png'
export default function Footer() {
  return (
    <div className='bg-black h-auto '>
        <div className='text-center block'>
          <img src={Logo} alt="" className='mx-auto w-[200px]'/>
          <h1 className='text-[4vh] lg:text-5xl text-amber-600 mb-5 '><span className="text-amber-400">Quick</span>Buy</h1>
        </div>
      <div className='flex justify-between lg:justify-around h-auto mb-0'>
        <div className='mb-10'>
          <h1 className='text-[2vh] lg:text-3xl text-white text-center'>Connect with
            us</h1>
          <ul className='flex justify-center flex-col mt-5 items-center'>
            <li className=' text-[1vh] lg:text-2xl inline text-zinc-400'>Facebook </li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>Twitter </li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>Instagram </li>
            <li className='flex gap-1 text-amber-400'><FaFacebook className=' text-[1vh] lg:text-2xl'/>
              <FaTwitter className=' text-[1vh] lg:text-2xl' /> < FaInstagram  className=' text-[1vh] lg:text-2xl' /></li>

          </ul>
        </div>
        <Link to={'/admin'}><div className='mb-10'>
          <h4 className='text-[2vh] lg:text-3xl text-white text-center'>Make Money with Us</h4>
          <ul className='flex justify-center flex-col mt-5 items-center'>
            <li className=' text-[1vh] lg:text-2xl  text-zinc-400'>Sell on QuickBuy</li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>supply to QuickBuy</li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>Become an Affiliate</li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>Advertise Your Products</li>
          </ul>
        </div></Link>
        <div className='mb-10'>
          <h4 className='text-[2vh] lg:text-3xl text-white text-center'>Let Us Help You</h4>
          <ul className='flex justify-center flex-col mt-5 items-center'>
            <li className=' text-[1vh] lg:text-2xl  text-zinc-400'>Your Account</li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>Returns Center</li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>100% Purchase Protection</li>
            <li className=' text-[1vh] lg:text-2xl text-zinc-400'>Help Center</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

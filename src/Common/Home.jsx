import React from 'react'
import Images from '../assets/Images.png'
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Footer from './Footer'
export default function Home() {
  return (
    <div className='white w-screen h-screen'>
      <div className='flex  bg-fuchsia-200 '>
      <div className='pt-40 pl-[140px] '>
        <h1 className='text-red-600 text-7xl'>Sale 20% Off</h1>
        <h1 className='text-black text-7xl'>On Everthing</h1>
        <p className='text-2xl text-gray-900  pt-4 text-start'>
          Discover top groceries , beauty, Fragrances,<br />
          and Furniture items from Amaron.Enjoy great <br />deals and excellent service, all in one place.<br/> Simplify your shopping
          experience with us.</p>
        <button className='bg-red-600 w-40 mt-5 h-10 text-white  '>Shop Now</button>
      </div>
     <img className='w-150 h-150 pt-10 pl-28 pb-20' src={Images} />
    </div>
    <div >
    <h1 className='text-5xl text-black flex justify-center mt-10 font-bold'>Why Shop With Us</h1>
   
    <div className='flex gap-5 mt-8  justify-evenly pb-20'>
    <div className='bg-sky-950 w-80 h-[220px] rounded-md  flex flex-col text-white justify-center items-center'>
    <PiTruck size={50} className=' text-black'/>
    <h1 className="mt-4 text-center text-white font-bold">Super Fast and Free Delivery</h1>
    <p className='mt-1 text-center text-white '>Enjoy free and fast delivery on all your favorite products!</p>
    </div>
    <div className='bg-sky-950 w-80 h-[220px] rounded-md  flex flex-col text-white justify-center items-center'>
    < MdAttachMoney size={50} className=' text-black'/>
    <h1 className="mt-4 text-center font-bold text-white ">Money-back Guaranteed</h1>
    <p className='mt-1 text-center text-white '>30-day money-back guarantee.</p>
    </div>
    <div className='bg-sky-950 w-80 h-[220px] rounded-md  flex flex-col text-white justify-center items-center'>
    <RiSecurePaymentLine size={50} className=' text-black'/>
    <h1 className="mt-4 text-center font-bold text-white ">Super Secure Payment System</h1>
    <p className='mt-1 ml-1 text-center text-white'>Enjoy secure payments every time you <br/>shop with us.</p>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
    
  )
}

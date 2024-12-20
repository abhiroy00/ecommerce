import React from 'react'
import Images from '../assets/Images.png'
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='white w-screen h-auto'>
      <div className='flex justify-around'>
        <div className='p-[10%] w-1/2 '>
          <h1 className='text-amber-600 text-[5vw]'>Sale 20% Off</h1>
          <h1 className='text-black text-[5vw]'>On Everthing</h1>
          <p className='text-[2vw] text-gray-900  pt-4 text-start'>
            Discover top groceries , beauty, Fragrances,
            and Furniture items from Amaron.Enjoy great deals and excellent service, all in one place. Simplify your shopping
            experience with us.</p>
          <Link to='/Product'><button className='bg-amber-600 w-auto p-1 mt-5 h-auto text-white text-[2vw] rounded-md'>Shop Now</button></Link>
        </div>
        <div className='w-1/2'>
          <img className='w-100% h-auto  pt-[20%] pl-[10%]' src={Images} />
        </div>
      </div>
      <div >
        <h1 className=' text-[5vw] text-black flex justify-center mt-10 font-bold'>Why Shop With Us</h1>
        <div className='flex gap-5 mt-8  justify-around pb-20 '>
        <Link to="/page1">
    <button
      className="bg-sky-950 w-[30vw] min-w-28 max-w-60 h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500"
      type="button"
    >
      <PiTruck className="text-white text-[5vh]" />
      <h1 className="mt-4 text-center text-white font-bold">
        Super Fast and Free Delivery
      </h1>
      <p className="mt-1 text-center text-white">
        Enjoy free and fast delivery on all your favorite products!
      </p>
    </button>
  </Link>
          <Link to='/page2'>
          <button
           className='bg-sky-950 w-[30vw] min-w-28 max-w-60 h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'
            type="button">
            < MdAttachMoney className=' text-white text-[5vh]' />
            <h1 className="mt-4 text-center font-bold text-white ">Money-back Guaranteed</h1>
            <p className='mt-1 text-center text-white '>30-day money-back guarantee.</p>
            </button>
          </Link>
          <Link to='/page3'>
          <button
           className='bg-sky-950 w-[30vw] min-w-28 max-w-60 h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'
            type="button">
            <RiSecurePaymentLine className=' text-white text-[5vh]' />
            <h1 className="mt-4 text-center font-bold text-white ">Super Secure Payment System</h1>
            <p className='mt-1 ml-1 text-center text-white'>Enjoy secure payments every time you shop with us.</p>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

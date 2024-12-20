import React from 'react'
import Image2 from '../assets/Image2.png'
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from 'react-icons/io';
import { useState,useEffect } from 'react';
export default function Home() {
  const slides = [
    {
      url: 'https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg'
    },
    {
      url: 'https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?semt=ais_hybrid'
    },
    {
      url: 'https://www.shutterstock.com/image-vector/ecommerce-web-banner-3d-smartphone-260nw-2069305328.jpg'
    },
    {
      url: 'https://img.freepik.com/premium-psd/black-friday-sale-facebook-timeline-cover-web-banner-template_220443-238.jpg?semt=ais_hybrid'
    }
  ];
  const [currentindex,setcurrentindex]= useState(0)
  useEffect(() => { 
    const interval = setInterval(() => { 
      nextslide(); }, 5000); 
      return () => clearInterval(interval); 
  }, [currentindex]);
  const prevslide = ()=> {
    const isfirstslide = currentindex === 0;
    const newIndex = isfirstslide ? slides.length - 1 : currentindex - 1;
    setcurrentindex(newIndex);
  }
  const nextslide = ()=> {
    const islastslide = currentindex === slides.length -1;
    const newindex = islastslide ? 0 : currentindex + 1;
    setcurrentindex(newindex)
  }

  return (
    <div className='white w-screen h-auto' style={{animation:"changecolor 20s ease infinite"}}>
      <div className='flex justify-around'>
        <div className='p-[10%] w-1/2 '>
          <h1 className='animated-text'></h1>
          <h1 className='text-black' style={{fontSize:"2.5em",position:"absolute",top:"45%",marginRight:"800px",fontWeight:"bolder"}}>QuickBay: Where Speed Meets Savings!</h1>
          <p className='text-[2vw] text-gray-900  pt-40'style={{fontWeight:"bold",fontFamily:"cursive"}}>
            Discover top groceries , beauty, Fragrances,
            and Furniture items from Amaron.Enjoy great deals and excellent service, all in one place. Simplify your shopping
            experience with us.</p>
          <button className='bg-amber-600 w-auto p-2 mt-8 h-auto text-white text-[2vw] rounded-md hover:text-red-950'>Shop Now</button>
        </div>
        <div className='w-1/2'>
          <img className='w-100% h-auto' src={Image2} style={{position:"absolute",top:250,right:80,height:"650px"}}></img>
        </div>
      </div>
      <div>
      <div style={{ backgroundImage: `url(${slides[currentindex].url})` }} className='flex w-[95vw] mt-10 h-[30vh] md:h-[75vh] mx-auto rounded-lg  bg-top  bg-contain duration-500 group'>
        <div className='hidden group-hover:block relative font-bold left-[4%]  top-[50%] text-black/40' onClick={prevslide} ><IoIosArrowDropleftCircle size={50}/></div>
        <div className='hidden group-hover:block relative font-bold right-[-90%] top-[50%] text-black/40' onClick={nextslide}><IoIosArrowDroprightCircle size={50}/></div>
      </div>
      </div>
      <div >
        <h1 className=' text-[5vw] text-black flex justify-center  font-bold'>Why Shop With Us</h1>
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

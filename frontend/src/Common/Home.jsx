import React, { useState, useEffect } from 'react';
import Image2 from '../assets/Image2.png';
import { Link } from 'react-router-dom';
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import Category from '../features/Category/Category';

export default function Home() {
  const slides = [
    {
      url: banner1
    },
    {
      url: banner2
    },
    {
      url: banner3
    },
    {
      url: banner4
    }
  ];

  const [currentindex, setcurrentindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextslide();
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentindex]);

  const prevslide = () => {
    const isfirstslide = currentindex === 0;
    const newIndex = isfirstslide ? slides.length - 1 : currentindex - 1;
    setcurrentindex(newIndex);
  };

  const nextslide = () => {
    const islastslide = currentindex === slides.length - 1;
    const newindex = islastslide ? 0 : currentindex + 1;
    setcurrentindex(newindex);
  };

  return (
    <div className='w-screen h-auto animate-[changecolor_20s_ease_infinite]'>
      <div className='flex justify-around'>
        <div className='p-[10%] w-1/2'>
          <h1 className='text-5xl font-bold text-amber-600 animated-text'></h1>
          <h1 className='text-black text-5xl font-bold pt-10'>
            QuickBay: Where Speed Meets Savings!
          </h1>
          <p className='text-[2vw] text-gray-900 pt-10 font-bold font-cursive'>
            Discover top groceries, beauty, Fragrances, and Furniture items from Amaron. Enjoy great deals and excellent service, all in one place. Simplify your shopping experience with us.
          </p>
          <button className='bg-amber-600 w-auto p-2 mt-8 h-auto text-white text-[2vw] rounded-md hover:text-red-950'>
            Shop Now
          </button>
        </div>
        <div className='w-1/2 relative top-[250px] right-[80px]'>
          <img className='w-full h-auto' src={Image2} style={{ height: '650px',position:"absolute",bottom:"390px",left:"50px"}} alt="Product" />
        </div>
      </div>
      <div className='w-screen h-[30vh] md:h-[60vh] py-10 group'>
      <Link to={'/category'}><div style={{ backgroundImage: `url(${slides[currentindex].url})` }} className='flex w-[95vw] h-[30vh] md:h-[60vh] mx-auto rounded-lg bg-top bg-contain bg-no-repeat duration-500'></div></Link>
          <div className='block absolute top-[160%]  left-[5%] text-white  ' onClick={prevslide}>
            <IoIosArrowDropleftCircle size={50} />
          </div>
          <div className='block absolute top-[160%] left-[92%] text-white' onClick={nextslide}>
            <IoIosArrowDroprightCircle size={50} />
          </div>
      </div>
      {/* <div className='w-screen h-auto pt-20 text-white flex justify-center'>
        <div className='flex justify-between bg-sky-950 w-[95%] h-[25vh]'>
          <div className='block p-3'>
            <h1 className='animated-text text-yellow-500 font-bold text-2xl md:text-4xl'></h1>
            <h1 className='md:text-2xl my-2 lg:my-5'>QuickBuy: Where Speed Meets Savings!</h1>
            <p className='text-xs md:text-lg'>Discover top groceries, beauty, Fragrances, and Furniture items from Amaron. Enjoy great deals and excellent service, all in one place. Simplify your shopping experience with us.</p>
          </div>
          <div>
            <img src={Image2} alt="delivery boy image" className='h-[90%] float-right' />
          </div>
        </div>
      </div> */}
      <div className='pt-10'>
        <h1 className='text-[5vw] text-black flex justify-center font-bold'>
          Why Shop With Us
        </h1>
        <div className='flex gap-5 mt-8 justify-around pb-20'>
          <Link to="/page1">
            <button className='bg-sky-950 w-[30vw] min-w-[28] max-w-[60] h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'>
              <PiTruck className='text-white text-[5vh]' />
              <h1 className='mt-4 text-center text-white font-bold'>
                Super Fast and Free Delivery
              </h1>
              <p className='mt-1 text-center text-white'>
                Enjoy free and fast delivery on all your favorite products!
              </p>
            </button>
          </Link>
          <Link to='/page2'>
            <button className='bg-sky-950 w-[30vw] min-w-[28] max-w-[60] h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'>
              <MdAttachMoney className='text-white text-[5vh]' />
              <h1 className='mt-4 text-center font-bold text-white'>
                Money-back Guaranteed
              </h1>
              <p className='mt-1 text-center text-white'>
                30-day money-back guarantee.
              </p>
            </button>
          </Link>
          <Link to='/page3'>
            <button className='bg-sky-950 w-[30vw] min-w-[28] max-w-[60] h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'>
              <RiSecurePaymentLine className='text-white text-[5vh]' />
              <h1 className='mt-4 text-center font-bold text-white'>
                Super Secure Payment System
              </h1>
              <p className='mt-1 ml-1 text-center text-white'>
                Enjoy secure payments every time you shop with us.
              </p>
            </button>
          </Link>
        </div>
      </div>
  <Category/>
    </div>
  );
}

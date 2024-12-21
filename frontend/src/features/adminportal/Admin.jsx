import React from 'react'
import Logo from '../../assets/logo 12.png'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='p-10 animate-[changecolor_20s_ease_infinite]'>
        <h1 className='text-center text-4xl font-bold'>Admin Portal!</h1>
        <div className='flex h-[50vh] mt-10'>
            <div className='text-left lg:w-1/2 '>
                <h2 className='text-4xl font-semibold'>Make Money With Us</h2>
                <p className='w-[80%] mt-10 text-lg text-gray-700 bg-white/70'>Ready to transform your business into a thriving success? Selling your products on our website is the ultimate way to boost your business and reach new heights. Our platform offers a seamless shopping experience, attracting a broad audience of eager shoppers who are ready to discover your products. With our user-friendly interface, powerful marketing tools, and dedicated support, you'll be able to showcase your offerings effortlessly. Enjoy the benefits of fast and secure transactions, extensive reach, and the potential for increased sales. Don't miss out on the opportunity to grow your brand and connect with customers like never before. Join us today and watch your business soar! 🚀</p>
            </div>
            <div className='w-1/2'>
                <img src={Logo} alt="" className='w-[60%] relative bottom-16 left-40'/>
            </div>
        </div>
        <div>
            <h2 className='text-4xl font-semibold'>Add Products</h2>
            <h3 className='text-2xl'>You can add your Products on QuickBuy by filling the form below:- </h3>
        </div>
        <div className= 'bg-white border-2 border-black m-2 p-6 w-full lg:w-5/3 rounded-lg '>
                    <h1 className='text-2xl font-semibold'>Enter Details</h1>
                    <div className=' block sm:flex '>
                    <div className='m-2 w-1/2'>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-lg mb-2'>Product Name</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="text" placeholder='Enter Name' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-lg mb-2'>Product Description</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="text" placeholder='Enter Description' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="phone" className='block text-lg mb-2'>Image</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="tel" placeholder='Enter Image Url' />
                    </div>
                    </div>
                    <div className='m-2 w-1/2'>
                    <div className='mb-4'>
                        <label htmlFor="address" className='block text-lg mb-2'>Product Category</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="text" placeholder='Enter Category' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="state" className='block text-lg mb-2'>Garranty/Warranty <span className='text-base'>(Optional)</span></label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="text" placeholder='Enter _months or _Years' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="pincode" className='block text-lg mb-2'>STOCK</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="text" placeholder='Enter Quantitiy of Stock' />
                    </div>
                    </div>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-xl mb-4'>Set Price</h2>
                        <label htmlFor="password" className='block text-lg mb-2'>Enter Price</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg mb-4' type="password" placeholder='Enter Price' />
                        <label htmlFor="confirmPassword" className='block text-lg mb-2'>Enter Discount</label>
                        <input className='border border-black w-80 h-10 px-3 rounded-md text-lg' type="password" placeholder='Enter _%off' />
                    </div>
                    <button className='bg-amber-400 w-52  py-3 text-white rounded-2xl hover:bg-amber-600 transition duration-300'>Submit</button>
                </div>
    </div>
  )
}

export default Admin
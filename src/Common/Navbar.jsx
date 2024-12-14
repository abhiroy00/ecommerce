import React from 'react'

export default function Navbar() {
  return (
    <div  >
        <div className='bg-white w-screen h-[70px] flex justify-between  '>
          <h1 className='ml-28 text-4xl text-violet-700 mt-3'>QuickBuy</h1>
        <ul className='flex text-black mr-28 mt-5 gap-8 text-xl'>
          <li>Home</li>
          <li>Products</li>
          <li>Category</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        </div>
    </div>
  )
}

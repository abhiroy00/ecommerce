import React from 'react'
import Images from '../assets/Images.png'

export default function Home() {
  return (
    <div className='bg-neutral-500 w-screen h-screen flex'>
      <div className='pt-40 pl-[140px] '>
        <h1 className='text-red-600 text-7xl'>Sale 20% Off</h1>
        <h1 className='text-black text-7xl'>On Everthing</h1>
        <h1>Sorry ashish bhai</h1>
        <p className='text-2xl text-gray-900  pt-4 text-start'>
          Discover top groceries , beauty, Fragrances,<br />
          and Furniture items from Amaron.Enjoy great <br />deals and excellent service, all in one place.<br/> Simplify your shopping
          experience with us.</p>
        <button className='bg-red-700 w-40 mt-5 h-10 border-black border-solid border-2 '>Shop Now</button>
      </div>
      <div className='flex  '>
        <img className='w-150 h-150 pt-10 pl-28 pb-20' src={Images} />
      </div>
    </div>
  )
}

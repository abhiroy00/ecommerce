import React from 'react'

export default function Cart() {
  return (
    <div className='flex bg-neutral-400 py-14'>
      <div className='bg-white w-200 h-200 ml-28 rounded-sm shadow-slate-900 shadow-sm p-4'>
        <hr className='w-auto h-1 bg-black mt-10' />
        <div className='flex h-200 w-200 mt-5'>
          <div className='mr-5'>
            <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} className='w-40 h-40 '/>
            <button className='bg-zinc-600 rounded-full mt-6 w-8 h-8 pb-1'>+</button>
            <input type='number' min={1} max={5} placeholder='1'className='w-10 border border-black border-2  rounded-md pl-2 mx-4'/>
            <button className='bg-zinc-600 rounded-full mt-6 w-8 h-8 pb-1'>-</button>

          </div>
         <div>
            <h4 className='flex mt-5'>
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops 
              <hr className='w-[1px] mt-1 h-5 ml-10 bg-black'/> 
              <span className='ml-5'>Delivery by Dec 26</span>
            </h4>
           <p className='text-sm mt-3 text-gray-600'>Category: Men's Clothing</p>
           <h6 className='mt-3 font-bold'>price:-500/</h6>
           <h6 className='mt-3'>Rating:-⭐⭐⭐⭐⭐</h6>
           <button className='font-bold mt-8 px-2 py-2 rounded-md'>Save For Later</button>
           <button className='font-bold mt-8 px-2 py-2 rounded-md ml-8'>Remove</button>

         </div>
        </div>
      </div>
      {/* second-div */}
      <div className='second-div bg-white w-128 h-128 ml-10 rounded-sm shadow-slate-900 shadow-sm p-4 '>
        <h1 className='flex justify-center items-center font-semibold text-2xl'>Price Details</h1>
        <hr className='w-auto h-1 bg-black mt-6' />
        {/*============= main div of items ==========================*/}
        <div className='mt-5 px-6'>
        <div className='flex justify-between mb-5'>
       <h6>Price (6 items) </h6>
       <span>1,34,589/</span>
       </div>
       <div className='flex justify-between mb-5'>
       <h6>Discount </h6>
       <span>-54,589/</span>
       </div> <div className='flex justify-between mb-5'>
       <h6>Buy more & Save more </h6>
       <span>-15/</span>
       </div> <div className='flex justify-between mb-5'>
       <h6>Delivery charges </h6>
       <span>350 <sapn>Free</sapn></span>
       </div> <div className='flex justify-between mb-5'>
       <h6>Secured Packaging Fee </h6>
       <span>118/</span>
       </div>
       <hr className='w-auto h-1 bg-black mt-6'/>
       <div className='flex justify-between font-bold mt-5'>
       <h6>Total Amount</h6>
       <span>2,00,000/ only</span>
       </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

const Product = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl font-semibold">Products!</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className='mx-2 bg-gray-100 w-80 h-120'>
              <img src="" alt="product-img"  className='w-[100%] h-[60%] border border-black'/>
              <div className='px-2'>
                <h2 className='font font-semibold text-xl'>Product Title</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, tempore et excepturi modi incidunt.</p>
                <p>category</p>
                <p className='font font-semibold text-xl'>$Price</p>
                <span className='flex justify-around'><button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>BuyNow</button> <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Add To Cart</button></span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
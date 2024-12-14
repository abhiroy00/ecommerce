import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faMoneyBill, faRotateLeft, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'

const Infopage = () => {
  return (
    <div className='m-0 p-0'>
      <div className='block lg:flex min-h-screen min-w-screen'>
        <div className='w-1/2' >
          <img src="" alt="Product img" className='m-24 w-5/3 h-auto' />
        </div>
        <div className='text-left w-1/2 m-10 p-10'>
          <h1 className='text-2xl font-bold mb-4'>Product Title</h1>
          <p className='mb-2'>Product description (Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque saepe fugit vero nemo iste labore laboriosam repellendus quidem, deserunt suscipit ullam, eius corporis reiciendis praesentium eveniet et consequuntur cupiditate at.)</p>
          <p className='mb-2'>Product Ratings</p>
          <p className='mb-2'>Product Category</p>
          <span className='text-2xl'><p className=' inline text-red-600'>-(productdiscount)%</p><p className='inline text-black'>$(Product price)</p></span>
          <p className='mb-10'>Product MRP <br /> Inclusive of all taxes</p>
          <span>
            <p className='inline m-5  '> <FontAwesomeIcon className='text-xl relative bottom-5 left-14' icon={faTruck} />Free Delivery</p>
            <p className='inline m-5  '> <FontAwesomeIcon className='text-xl relative bottom-5 left-16' icon={faMoneyBill} />Cash On Delivery</p>
            <p className='inline m-5  '> <FontAwesomeIcon className='text-xl relative bottom-5 left-24' icon={faRotateLeft} />7 days Return & Exchange</p>
            <p className='inline m-5  '> <FontAwesomeIcon className='text-xl relative bottom-5 left-16' icon={faLock} />Secure Transaction</p>
          </span>
          <p className='mb-2'>Product warranty</p>
          <p className='mb-2'>Shipping Information</p>
          <p className='mb-2'>availability status</p>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-lg font-medium">
              Quantity
            </label>
            <input type="number" id="quantity" min="1" defaultValue={1} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button className=" bg-violet-700 text-white px-6 py-3 rounded-lg mr-10 hover:bg-violet-500 transition duration-300">
            Buy Now
          </button>
          <button className=" bg-violet-700 text-white px-6 py-3 rounded-lg mr-10 hover:bg-violet-500 transition duration-300">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">

                <div> <h3 className="text-lg font-semibold">reviewerName</h3>
                  <p className="text-gray-600">reviewerEmail</p>
                  <p className="text-gray-600">comment</p>
                  <p className="text-gray-600">review date</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span>
                  <FontAwesomeIcon icon={faStar} className='text-yellow-300'/>
                  <FontAwesomeIcon icon={faStar} className='text-yellow-300'/>
                  <FontAwesomeIcon icon={faStar} className='text-yellow-300'/>
                  <FontAwesomeIcon icon={faStar} className='text-yellow-300'/>
                  <FontAwesomeIcon icon={faStar} className='text-yellow-300'/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

        export default Infopage
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
const [product,setproduct] =useState([]);

useEffect(() => {
  try {

    axios.get("http://localhost:3000/product").then((res) => {
      setproduct(res.data)

    }).catch((err) => {
      console.log(err);

    })

  }
  catch (err) {
    console.log(err);

  }

}, [])


const menProduct=product.filter(product=>product.category ==="men's clothing")
const electronicProduct=product.filter(product=>product.category ==='electronics')
const womenProduct=product.filter(product=>product.category === "women's clothing")
const jeweleryProduct=product.filter(product=>product.category ==='jewelery')



  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       
        <h2 className="text-center text-3xl font-semibold">Jewelery Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {menProduct.map((value, index) => (
            <div key={index} className='mx-2 bg-gray-100 w-80 h-auto'>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" className='w-[100%] h-[60%] border border-black' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>
                  <p>{value.description}</p>
                  <p>category: {value.category}</p>
                  <p className='font font-semibold text-xl'>${value.price}</p>
                </div>
              </Link>
              <span className='flex justify-around'>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Buy Now</button>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Add To Cart</button>
              </span>
            </div>

          ))}
        </div>

        <h2 className="text-center text-3xl font-semibold">Electronic Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {electronicProduct.map((value, index) => (
            <div key={index} className='mx-2 bg-gray-100 w-80 h-auto'>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" className='w-[100%] h-[60%] border border-black' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>
                  <p>{value.description}</p>
                  <p>category: {value.category}</p>
                  <p className='font font-semibold text-xl'>${value.price}</p>
                </div>
              </Link>
              <span className='flex justify-around'>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Buy Now</button>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Add To Cart</button>
              </span>
            </div>

          ))}
        </div>
        <h2 className="text-center text-3xl font-semibold">Women Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {womenProduct.map((value, index) => (
            <div key={index} className='mx-2 bg-gray-100 w-80 h-auto'>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" className='w-[100%] h-[60%] border border-black' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>
                  <p>{value.description}</p>
                  <p>category: {value.category}</p>
                  <p className='font font-semibold text-xl'>${value.price}</p>
                </div>
              </Link>
              <span className='flex justify-around'>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Buy Now</button>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Add To Cart</button>
              </span>
            </div>

          ))}
        </div>
        <h2 className="text-center text-3xl font-semibold">Jewelery Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {jeweleryProduct.map((value, index) => (
            <div key={index} className='mx-2 bg-gray-100 w-80 h-auto'>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" className='w-[100%] h-[60%] border border-black' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>
                  <p>{value.description}</p>
                  <p>category: {value.category}</p>
                  <p className='font font-semibold text-xl'>${value.price}</p>
                </div>
              </Link>
              <span className='flex justify-around'>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Buy Now</button>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'>Add To Cart</button>
              </span>
            </div>

          ))}
        </div>
      </div>

    </div>
  )
}

export default Category
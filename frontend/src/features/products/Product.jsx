import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product() {

  const [product, setProduct] = useState([])
  
  
 product.forEach((data)=>{
  console.log(data.image);
  
 })

  useEffect(() => {
    async function getdata() {
      const res = await fetch("http://localhost:3000/product")
      const product = await res.json()
      setProduct(product.data)
      console.log(product.data);
      
   
    }
    getdata()

  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-center text-3xl font-semibold">Products!</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {product.map((value, index) => (
            
            
            <div key={index} className='lg:w-72 md:w-52 w-40 lg:h-auto '>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" className='w-[100%] h-[60%] ' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>
                  <p>{value.description}</p>
                  <div className='text-lg font-semibold'>{value.price} <p className='inline text-orange-400 font-medium'>({value.discount}% OFF)</p></div>
                </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
    </div>
  );

}

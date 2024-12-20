import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const Product = () => {

  const [product, setproduct] = useState([])

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





  return (
    <div className="bg-white" style={{animation:"changecolor 20s ease infinite"}}>
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl font-semibold">Products!</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {product.map((value, index) => (
            <div key={index} className='mx-2 bg-gray-400 w-90 h-auto' style={{borderRadius:20,border:"5px solid goldenrod",alignItems:"center"}}>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" className='w-[80%] h-[40%] border border-black' style={{position:"relative",left:40,top:10,borderRadius:20,border:"none"}}/>
                <div className='px-6'>
                  <h2 className='font font-semibold text-xl text-white' style={{position:"relative",textAlign:"center",top:25,fontWeight:"revert-layer"}}>{value.title}</h2>
                  <p style={{position:"relative",textAlign:"center",top:25,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold"}} className='text-gray-800'>{value.description}</p>
                  <p style={{position:"relative",textAlign:"center",top:30,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold",fontSize:"20px"}} className='text-blue-700'>Category: {value.category}</p>
                  <p className='font font-semibold text-xl text-red-600' style={{position:"relative",textAlign:"center",top:35,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold"}}>Price:${value.price}</p>
                </div>
              </Link>
              <span className='flex justify-around'>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md' style={{position:"relative",textAlign:"center",top:45,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold",color:"red"}}>Buy Now</button>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'style={{position:"relative",textAlign:"center",top:45,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold",color:"red"}}>Add To Cart</button>
              </span>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
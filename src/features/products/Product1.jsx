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
            <div key={index} className=' bg-white' style={{border:"2px solid white",alignItems:"center",width:"80%"}}>
              <Link to={`/infopage/${value.id}`} >
                <img src={value.image} alt="product-img" style={{position:"relative",border:"none",alignItems:"center"}}/>
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl text-black' style={{position:"relative",top:15,fontWeight:"revert-layer"}}>{value.title}</h2>
                  {/* <p style={{position:"relative",textAlign:"center",top:25,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold"}} className='text-gray-800'>{value.description}</p> */}
                  <p style={{position:"relative",top:20,fontSize:"20px",fontWeight:400}} className='text-gray-500'>Category: {value.category}</p>
                  <p className='font font-semibold text-xl text-red-600' style={{position:"relative",top:35,fontWeight:"revert-layer",fontWeight:"bold"}}>Price:Rs{value.price}</p>
                </div>
              </Link>
              {/* <span className='flex justify-around'>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md' style={{position:"relative",textAlign:"center",top:45,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold",color:"red"}}>Buy Now</button>
                <button className='bg-amber-400 p-2 w-32 hover:bg-amber-500 rounded-md'style={{position:"relative",textAlign:"center",top:45,fontWeight:"revert-layer",fontFamily:"cursive",fontWeight:"bold",color:"red"}}>Add To Cart</button>
              </span> */}
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
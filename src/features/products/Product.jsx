import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Product(){

  const[product,setProduct]=useState([])

  useEffect(()=>{
    async function getdata(){
      const res=await fetch("http://localhost:3000/product")
      const data=await res.json()
      setProduct(data)
      console.log(data);
    }
    getdata()

  },[])

  return (
    <div style={{ animation: "changecolor 20s infinite", display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {product.map((value, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "20%",
            height:"auto",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
            marginLeft:"20px",
            alignItems:"center",
            position:"relative",
            top:20,
            left:"7%",
            gap:12,
            marginBottom:40
          }}
        >
        <Link to={`/infopage/${value.id}`}>
          <img
            src={value.image}
            alt={value.name}
            style={{ width: "90%", borderRadius: "8px", marginBottom: "2px" }}
          ></img>  </Link>

          <h2 style={{ fontSize: "1.2em", margin: "8px 0" }}>{value.title}</h2>
          <p style={{ fontSize: "1em", color: "#333", margin: "8px 0" }}>Price: ${value.price}</p>
          <p style={{ fontSize: "1.2em", color: "#666", margin: "8px 0" }}>{value.category}</p> 
         
        </div> 
        
         
      ))}
      
    </div>
  );
  
}

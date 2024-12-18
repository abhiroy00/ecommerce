import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div style={{height:"100vh",width:"100wh",backgroundColor:"white"}}>
        <h1  className='animate-pulse' style={{position:"absolute",top:"210px",fontSize:"40px",color:"purple",left:"25px"}}>Welcome!</h1>
        <h1 style={{position:"absolute",top:"285px",fontSize:"50px",color:"indigo",fontFamily:"sans-serif",left:"25px"}}>Your One-Stop Shop for Everything</h1>
        <p style={{position:"absolute",top:"370px",fontSize:"25px",color:"magenta",fontFamily:"cursive",left:"25px",marginRight:"800px"}}>Welcome to QuickBuy, your one-stop destination for all your shopping needs! From the latest trends in fashion to must-have gadgets, home essentials, and more, we bring a world of quality products right to your fingertips. Enjoy seamless navigation, secure payments, and fast delivery, all designed to make your shopping experience effortless and enjoyable. </p>

        <div style={{height:"500px",width:"500px",animation:"changecolor 50s infinite",position:"absolute",top:"210px",left:"900px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",justifyContent:"center"}}></div>

        <button  style={{height:"60px",width:"150px",color:"white",background:"linear-gradient(to top,indigo,purple)",fontWeight:"bold",position:"absolute",top:"660px",left:"25px",borderRadius:"20px"}}>Shop Now!</button>
      </div>

    </div>
  )
}

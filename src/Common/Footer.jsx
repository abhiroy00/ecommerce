import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
    <footer className=' bg-black' style={{position:"absolute",height:"40%",width:"100%",top:"850px",margin:0,padding:0}}>
    <h1 style={{fontSize:"40px",color:"white",position:"absolute",right:"150px",top:40,marginRight:"900px",textAlign:"center"}}>Your One-Stop Shop for Everything</h1>
    <h1 style={{fontFamily:"cursive",color:"white",fontSize:"50px",position:"absolute",top:180,left:110}}>QuickBuy</h1>

    <h1 style={{color:"white" ,fontSize:"25px",position:"absolute",left:"520px",top:40}}>New Delhi</h1>
    <a href="#" style={{color:"white",position:"absolute",left:"520px",top:100}}>QuickBuy@NewDelhi.com</a>
    <h1 style={{color:"white" ,position:"absolute",left:"520px",top:145}}>+91 800-555-1234</h1>
    <h1 style={{color:"white" ,position:"absolute",left:"520px",top:180,marginRight:"750px"}}>QuickBuy E-Commerce Pvt. Ltd.
        Plot No. 123, Tower B, Sector 18,
        DLF Cyber City, Phase III,
        New Delhi, Delhi - 110037, India
    </h1>

    <h1 style={{color:"white" ,fontSize:"25px",position:"absolute",left:"850px",top:40}}>Mumbai</h1>
    <a href="#" style={{color:"white",position:"absolute",left:"850px",top:100}}>QuickBuy@Mumbai.com</a>
    <h1 style={{color:"white" ,position:"absolute",left:"850px",top:145}}>+91 900-666-1234</h1>
    <h1 style={{color:"white" ,position:"absolute",left:"850px",top:180,marginRight:"370px"}}>QuickBuy E-Commerce Pvt. Ltd.
    123 Business Plaza,
    Linking Road, Bandra West,
    Mumbai, Maharashtra, 400050, India
    </h1>

    <h1 style={{fontSize:"25px",position:"absolute",left:"1200px",top:40}} className='text-green-400'>For More Information</h1>
    <a href="#" style={{position:"absolute",left:"1200px",top:100,fontSize:"20px",color:"red"}} className='hover:text-yellow-400'>QuickBuy@Ecommerce.com</a> 
    <h1 style={{fontSize:"25px",position:"absolute",left:"1200px",top:150,color:"white"}}>Follow Me</h1>
    <FaInstagram style={{color:"white",height:"30px",width:"30px",top:210,position:"absolute",left:"1200px"}}/>
    <FaFacebook style={{color:"white",height:"30px",width:"30px",top:210,position:"absolute",left:"1270px"}}/>
    <FaWhatsapp style={{color:"white",height:"30px",width:"30px",top:210,position:"absolute",left:"1340px"}}/>
    <FaTwitter style={{color:"white",height:"30px",width:"30px",top:210,position:"absolute",left:"1410px"}}/>

    
    </footer>
    </div>
  )
}

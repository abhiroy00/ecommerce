import React  from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { loginWithRedirect , isAuthenticated , user} = useAuth0();
  const { logout } = useAuth0();
  return (
    <div  >
        <div className='bg-black w-screen h-[70px] flex justify-between  '>
          <h1 className='ml-28 text-4xl text-white mt-3'>Quick<span className='text-yellow-400'>Buy</span></h1>
        <ul className='flex text-white mr-28 mt-5 gap-8 text-xl'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Home</li></NavLink>
          <NavLink to={"/Product"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Products</li></NavLink>
          <NavLink to={"/category"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Category</li></NavLink>
          <NavLink to={"/About"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>About Us</li></NavLink>
          <NavLink to={"/Contact"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Contact Us</li></NavLink>
          {
            isAuthenticated && (
              <li>
                <p style={{color: "#FFD700", fontSize: "18px", fontWeight: "600",position:"relative",bottom:"4px", backgroundColor: "rgba(255, 255, 255, 0.1)",borderRadius: "8px",padding: "5px 15px", margin: "0", display: "flex", alignItems: "center", gap: "8px", border: "1px solid #FFD700",}}><FaUserCircle size={22} color="#FFD700" />{user.name}</p>
              </li>
            )
          }
          {
            isAuthenticated ? <li><button style={{backgroundColor:"#FFD700", color:"black", height:"30px",width:"90px", borderRadius:"5px"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out </button></li>
            : 
            <li><button style={{backgroundColor:"#FFD700", color:"black", height:"30px",width:"80px", borderRadius:"5px"}} onClick={() => loginWithRedirect()}>Log In</button></li>
          }
          
          
      
        </ul>
        </div>
    </div>
  )
}

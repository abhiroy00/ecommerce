import React  from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { loginWithRedirect , isAuthenticated , user} = useAuth0();
  const { logout } = useAuth0();
  return (
    <div  >
        <div className='bg-black w-screen h-[70px] flex justify-between  '>
          <h1 className='ml-28 text-4xl text-white mt-3'>Quick<span className='text-yellow-400'>Buy</span></h1>
        <ul className='flex text-white mr-28 mt-5 gap-8 text-xl'>
          <NavLink to={"/"}><li>Home</li></NavLink>
          <NavLink to={"/Product"}><li>Products</li></NavLink>
          <NavLink to={"/category"}><li>Category</li></NavLink>
          <NavLink to={"/About"}><li>About Us</li></NavLink>
          <NavLink to={"/Contact"}><li>Contact Us</li></NavLink>
          {
            isAuthenticated && (
              <li>
                <p>{user.name}</p>
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

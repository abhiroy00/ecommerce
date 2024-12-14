import React  from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect , isAuthenticated , user} = useAuth0();
  const { logout } = useAuth0();
  return (
    <div  >
        <div className='bg-black w-screen h-[70px] flex justify-between  '>
          <h1 className='ml-28 text-4xl text-white mt-3'>Quick<span className='text-yellow-400'>Buy</span></h1>
        <ul className='flex text-white mr-28 mt-5 gap-8 text-xl'>
          <li>Home</li>
          <li>Products</li>
          <li>Category</li>
          <li>About Us</li>
          <li>Contact Us</li>
          {
            isAuthenticated && (
              <li>
                <p>{user.name}</p>
              </li>
            )
          }
          {
            isAuthenticated ? <li><button style={{backgroundColor:"#E63946",  height:"30px",width:"80px", borderRadius:"5px"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out </button></li>
            : 
            <li><button style={{backgroundColor:"#E63946",  height:"30px",width:"80px", borderRadius:"5px"}} onClick={() => loginWithRedirect()}>Log In</button></li>
          }
          
          
      
        </ul>
        </div>
    </div>
  )
}

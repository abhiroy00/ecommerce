import  { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RiCoupon2Line } from "react-icons/ri";


export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div>
      <div className='bg-black w-screen h-[70px] flex justify-between'>
        <h1 className='ml-28 text-4xl text-white mt-3'>Quick<span className='text-yellow-400'>Buy</span></h1>
        <ul className='flex text-white mr-20 mt-5 gap-6 text-xl'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Home</li></NavLink>
          <NavLink to={"/Product"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Products</li></NavLink>
          <NavLink to={"/category"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Category</li></NavLink>
          <NavLink to={"/About"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>About Us</li></NavLink>
          <NavLink to={"/Contact"} className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}><li>Contact Us</li></NavLink>
          <NavLink to={"/cart"}>
            <button className="relative text-white font-medium px-3 pb-2 rounded-md">
              <MdOutlineShoppingCart style={{ color: 'white', fontSize: '40' }} />
            </button>
          </NavLink>

          {isAuthenticated && (
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <p style={{
                color: "#FFD700",
                fontSize: "18px",
                fontWeight: "600",
                position: "relative",
                bottom: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "5px 15px",
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #FFD700",
              }}>
                <FaUserCircle size={22} color="#FFD700" /> {user.name}
              </p>
              {isDropdownOpen && (
  <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-md z-10">
    <ul className="flex flex-col text-black p-2 font-serif">
      <NavLink to="/my-orders">
        <li className="flex items-center gap-2 hover:bg-gray-100 p-2  hover:font-bold">
          <LuShoppingBag /> My Orders
        </li>
      </NavLink>
      <NavLink to="/profile">
        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:font-bold">
          <CgProfile /> Profile
        </li>
      </NavLink>
      <NavLink to="/gift-cards">
        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:font-bold">
          <MdCardGiftcard /> Gift Cards
        </li>
      </NavLink>
      <NavLink to="/coupons">
        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:font-bold">
          <RiCoupon2Line /> Coupons
        </li>
      </NavLink>
      <NavLink to="/notifications">
        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:font-bold">
          <IoIosNotifications /> Notifications
        </li>
      </NavLink>
      <li className="hover:bg-gray-100 p-2">
        <button
          style={{
            backgroundColor: "#FFD700",
            color: "black",
            height: "30px",
            width: "100%",
            borderRadius: "5px",
          }}
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </button>
      </li>
    </ul>
  </div>
)}

            </li>
          )}

          {!isAuthenticated && (
            <li>
              <button
                style={{ backgroundColor: "#FFD700", color: "black", height: "30px", width: "80px", borderRadius: "5px" }}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

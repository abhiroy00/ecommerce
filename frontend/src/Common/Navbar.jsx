import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart, MdCardGiftcard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { RiCoupon2Line } from "react-icons/ri";
import Logo from "../assets/logo 12.png";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  let dropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout); // Clear any previous timeout
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // Delay of 200ms
  };

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <div className="m-0 p-0 max-w-screen">
      <nav className="flex justify-between bg-black h-[100px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[100px] h-auto" />
          <h1 className="text-3xl text-white">
            Quick<span className="text-yellow-400">Buy</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex text-white gap-6 text-2xl">
            {/* Nav Links */}
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/Product" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>
              <li>Products</li>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>
              <li>Category</li>
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>

        {/* Profile Section */}
        <div className="flex gap-2 items-center mr-10 text-white relative">
          {/* Cart Icon */}
          <NavLink to="/cart">
            <MdOutlineShoppingCart size={30} />
          </NavLink>

          {/* User Profile Dropdown */}
          {isAuthenticated && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <div
                className="flex items-center gap-2 cursor-pointer"
                style={{
                  color: "#FFD700",
                  fontSize: "18px",
                  fontWeight: "600",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  padding: "5px 15px",
                  border: "1px solid #FFD700",
                }}
              >
                <FaUserCircle size={22} color="#FFD700" />
                {user.name}
              </div>
              {isDropdownOpen && (
                <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="flex flex-col text-black p-2 font-serif">
                    {/* Dropdown Links */}
                    <NavLink to="/my-orders">
                      <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:font-bold">
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
                        onClick={() =>
                          logout({ logoutParams: { returnTo: window.location.origin } })
                        }
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Login Button */}
          {!isAuthenticated && (
            <button
              className="hidden lg:flex bg-yellow-400 text-black px-5 py-1 font-semibold rounded-md"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <FaBars size={30} className="lg:hidden" onClick={toggleMenu} />
        </div>
      </nav>
    </div>
  );
}

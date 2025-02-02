import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import 'animate.css';

const Navbar = () => {
  // State to manage navbar styles on scroll
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);  // Set scrolling to true when scrollY > 50px
      } else {
        setScrolling(false); // Reset when scrolled back to top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky z-50 top-0 transition-all ${scrolling ? "bg-[#2B2B2B] border-b border-[#D7EF43]" : ""}`}
      >
        <div className="navbar md:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#575757] rounded-box z-[1] mt-3 w-52 p-2 shadow text-white font-semibold"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-[#D7EF43]" : "text-white"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) => isActive ? "text-[#D7EF43]" : "text-white"}
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ranking"
                    className={({ isActive }) => isActive ? "text-[#D7EF43]" : "text-white"}
                  >
                    Ranking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/support"
                    className={({ isActive }) => isActive ? "text-[#D7EF43]" : "text-white"}
                  >
                    Support
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-white font-semibold menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "text-[#D7EF43] text-xl" : "text-white text-xl"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  className={({ isActive }) => isActive ? "text-[#D7EF43] text-xl" : "text-white text-xl"}
                >
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ranking"
                  className={({ isActive }) => isActive ? "text-[#D7EF43] text-xl" : "text-white text-xl"}
                >
                  Ranking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) => isActive ? "text-[#D7EF43] text-xl" : "text-white text-xl"}
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/register" className="btn text-black font-semibold hover:bg-[#f3ffa2] bg-[#D7EF43]">
              <AiOutlineUser className="text-xl" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

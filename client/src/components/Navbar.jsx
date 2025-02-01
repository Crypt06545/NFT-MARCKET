import { AiOutlineUser } from "react-icons/ai";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="navbar md:px-10 ">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white font-semibold"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>

                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-white font-semibold menu menu-horizontal px-1">
              <li>
                <a>Marcket Place</a>
              </li>
              <li>
                <a>Explore</a>
              </li>
              <li>
                <a>Ranking</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn text-black font-semibold hover:bg-[#f3ffa2] bg-[#D7EF43]"> <AiOutlineUser className="text-xl" />Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

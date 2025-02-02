import { FaGamepad, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white p-6 md:p-12">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="text-xl font-bold flex items-center gap-2">
            <img src={Logo} alt="" />
          </div>
          <p className=" mt-2">NFT marketplace UI created with Anima for Figma.</p>
          <p className=" mt-4">Join our community</p>
          <div className="flex gap-3 mt-2">
            <FaGamepad className="text-2xl cursor-pointer hover:text-[#efff8a]" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-[#efff8a]" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-[#efff8a]" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-[#efff8a]" />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-2 space-y-2 ">
            <li className="hover:text-[#efff8a] cursor-pointer">Marketplace</li>
            <li className="hover:text-[#efff8a] cursor-pointer">Rankings</li>
            <li className="hover:text-[#efff8a] cursor-pointer">Connect a wallet</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold">Join Our Weekly Digest</h3>
          <p className="mt-2">Get exclusive promotions & updates straight to your inbox.</p>
          <div className="mt-4 flex bg-white rounded-lg overflow-hidden max-w-sm">
            <input 
              type="email" 
              placeholder="Enter your email here" 
              className="p-3 flex-1 text-gray-800 focus:outline-none"
            />
            <button className="bg-[#D7EF43] px-5 py-2 text-black font-semibold hover:bg-[#efff8a]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center  mt-8 pt-4 text-sm">
        &copy; NFT Market. Use this template freely.
      </div>
    </footer>
  );
};

export default Footer;

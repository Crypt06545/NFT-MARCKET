import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#2B2B2B] font-rubik">
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import logo from "../../../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { PiChartLineBold } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>

        <div className="navbar-end">
          <a className="btn border-0 bg-[#244D3F] text-[#FFFFFF] font-semibold text-base"><RiHome2Line />Home</a>
          <a className="btn border-0 bg-[#FFFFFF] text-[#64748B] font-semibold text-base"><LuClock3 />Timeline</a>
          <a className="btn border-0 bg-[#FFFFFF] text-[#64748B] font-semibold text-base"><PiChartLineBold />Stats</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

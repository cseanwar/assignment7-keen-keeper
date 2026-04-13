import logo from "../../../assets/logo.png";
import { RiHome2Line } from "react-icons/ri";
import { PiChartLineBold } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>

        <div className="navbar-end">
          <a>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `btn font-semibold text-base border-0 ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : "bg-[#FFFFFF] text-[#64748B]"}`
              }
            >
              <RiHome2Line />
              Home
            </NavLink>
          </a>

          <a>
            <NavLink
              to={"/timeline"}
              className={({ isActive }) =>
                `btn font-semibold text-base border-0 ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : "bg-[#FFFFFF] text-[#64748B]"}`
              }
            >
              <LuClock3 />
              Timeline
            </NavLink>
          </a>

          <a>
            <NavLink
              to={"/stats"}
              className={({ isActive }) =>
                `btn font-semibold text-base border-0 ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : "bg-[#FFFFFF] text-[#64748B]"}`
              }
            >
              <PiChartLineBold />
              Stats
            </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

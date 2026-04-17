import logo from "../../../assets/logo.png";
import { RiHome2Line } from "react-icons/ri";
import { PiChartLineBold } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <img src={logo} alt="KeenKeeper logo" />
        </div>

        <div className="navbar-end hidden lg:flex gap-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `btn text-base border-0 ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : "bg-[#FFFFFF] text-[#64748B]"}`
            }
          >
            <RiHome2Line className="text-xl" />
            <span className="font-semibold">Home</span>
          </NavLink>

          <NavLink
            to={"/timeline"}
            className={({ isActive }) =>
              `btn text-base border-0 ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : "bg-[#FFFFFF] text-[#64748B]"}`
            }
          >
            <LuClock3 className="text-xl" />
            <span className="font-semibold">Timeline</span>
          </NavLink>

          <NavLink
            to={"/stats"}
            className={({ isActive }) =>
              `btn text-base border-0 ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : "bg-[#FFFFFF] text-[#64748B]"}`
            }
          >
            <PiChartLineBold className="text-xl" />
            <span className="font-semibold">Stats</span>
          </NavLink>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#FFFFFF] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/timeline"}>Timeline</NavLink>
            </li>
            <li>
              <NavLink to={"/stats"}>Stats</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

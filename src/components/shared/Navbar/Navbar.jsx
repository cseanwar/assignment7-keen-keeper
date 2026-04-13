import React from "react";
import logo from "../../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className=" text-[#4F39F6] text-xl font-bold">DigiTools</a>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <FaCartPlus />
          <button>Login</button>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({ carts }) => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className=" text-[#4F39F6] font-bold">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
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
        <div className="navbar-end gap-4">
          {/* cart wrapper */}
          <div className="relative">
            <FaCartPlus className="text-2xl" />

            {carts.length === 0 ? null : (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          <button className="btn">Login</button>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl">Get Start</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

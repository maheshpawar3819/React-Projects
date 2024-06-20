import React from "react";
import { cart, logo } from "./Utils/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="fixed w-full top-0 bg-white z-10">
      <div className="flex justify-between border-b-2 p-2 px-2 ">
        <div className="p-2">
          <input
            type="text"
            className="border rounded-md p-1"
            placeholder="Find..."
          />
          <button className="bg-slate-500 ml-2 p-1 rounded-md px-2 text-white drop-shadow-xl hover:bg-slate-800">
            Search..
          </button>
        </div>
        <div className="">
          <img src={logo} alt="logo image" className="w-52" />
        </div>

        <div className="p-1 flex">
          <div className="self-center p-1 ml-5 hover:text-orange-700 cursor-pointer">
            {cart}
          </div>
          <button className="bg-slate-500 ml-4 p-1 rounded-md px-2 text-white drop-shadow-xl hover:bg-slate-800 ">
           <Link to={"/login"}>Login</Link> 
          </button>
          <button className="bg-slate-500 ml-5 p-1 rounded-md px-2 text-white drop-shadow-xl hover:bg-slate-800 ">
            Sign in
          </button>
        </div>
      </div>
      <div className="pb-2">
        <ul className="flex justify-evenly tracking-widest text-gray-700 text-xl  pt-3">
          <li className="cursor-pointer hover:text-orange-700">
            <Link to={"/"}>New Arrivals</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <Link to={"/mens"}>Mens</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <Link to={"/womens"}>Womens</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <Link to={"/kids"}>Kids</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <Link to={"/sandals"}>Sandels</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

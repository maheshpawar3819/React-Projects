import React from "react";
import { search } from "./Utils/icons";
const Header = () => {
  return (
    <div className="fixed w-full top-0 bg-white z-10">
      <div className="flex justify-between border-b-2 p-2 px-2 ">
        <div className="p-2">
          <input type="text" className="border rounded-md p-1" />
          <button className="bg-slate-500 rounded-md text-white drop-shadow-xl hover size-8 px-2">
           {search}
          </button>
        </div>
        <div className="">
          <img
            src="https://www.campusshoes.com/cdn/shop/files/LOGO_e329524e-19ed-47b9-81cf-9e1ef658c789_280x.jpg?v=1718362815"
            alt=""
            className="w-52"
          />
        </div>
        <div className="p-2">
          <button className="bg-slate-500 ml-2 p-1 rounded-md px-2 text-white drop-shadow-xl hover:bg-slate-800">
            Login
          </button>
          <button className="bg-slate-500 ml-2 p-1 rounded-md px-2 text-white drop-shadow-xl hover:bg-slate-800">
            Sign in
          </button>
        </div>
      </div>
      <div className="">
        <ul className="flex justify-evenly tracking-widest text-gray-600 text-xl  pt-3">
          <li className="cursor-pointer hover:text-orange-700">Mens</li>
          <li className="cursor-pointer hover:text-orange-700">Womens</li>
          <li className="cursor-pointer hover:text-orange-700">Kids</li>
          <li className="cursor-pointer hover:text-orange-700">Sandels</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

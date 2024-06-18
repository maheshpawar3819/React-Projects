import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between border-b-2 p-5 px-2">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="">
          <img
            src="https://www.campusshoes.com/cdn/shop/files/LOGO_e329524e-19ed-47b9-81cf-9e1ef658c789_280x.jpg?v=1718362815"
            alt=""
            className="w-52"
          />
        </div>
        <div>
          <button>Login</button>
          <button>Sign in</button>
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

import React from "react";
import { LOGO_URL } from "./Utlities/logourl";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="logo img"
          className="logo"
        />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" name="search" />
        <button>Search</button>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

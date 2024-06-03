import React from "react";
import { LOGO_URL } from "./Utlities/logourl";
import { useState } from "react";
const Header = () => {

    const [loginbtn,setloginbtn]=useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo img" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" name="search" />
        <button className="serach-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="btn-div">
        <button className="login-btn" onClick={() => {
          loginbtn==="login" ? setloginbtn("logout"):setloginbtn("login");
        }}>{loginbtn}</button>
      </div>
    </div>
  );
};

export default Header;

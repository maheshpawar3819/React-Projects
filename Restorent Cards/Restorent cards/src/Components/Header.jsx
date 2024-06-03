import React from "react";
import { LOGO_URL } from "./Utlities/logourl";
import { useState } from "react";
const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo img" className="logo" />
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
        <button
          className="login-btn"
          onClick={() => {
            loginbtn === "login" ? setloginbtn("logout") : setloginbtn("login");
          }}
        >
          {loginbtn}
        </button>
      </div>
    </div>
  );
};

export default Header;

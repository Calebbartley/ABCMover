import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;

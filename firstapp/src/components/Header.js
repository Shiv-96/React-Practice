import Logo from "../assets/logo.png";
import React from "react";
import "./header.css"

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
    </div>
  );
};

export default Header;

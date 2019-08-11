import React from "react";
import logo from "../../logo.svg";
import "../../App.css";

const NavBar = () => {
  return (
    <nav>
      <img id="logo" src={logo} />
      <ul id="navbar_ul_items">
        <li target="_blank"> Concept </li>
        <li target="_blank"> Confidenciality </li>
        <li target="_blank"> Contact </li>
        <li target="_blank"> Prices </li>
      </ul>
      <i class="fas fa-bars"></i>
    </nav>
  );
};

export default NavBar;

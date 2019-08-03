import React from "react";
import logo from "../logo.svg";

const NavBar = () => {
	return (
		<nav>
		<img id='logo' src={logo}/>
		<ul>
			<li target="_blank"> Concept </li>
			<li target="_blank"> Confidenciality </li>
			<li target="_blank"> Contact </li>
			<li target="_blank"> Prices </li>
		</ul>
		</nav>
	);
};

export default NavBar;

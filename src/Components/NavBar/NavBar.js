import React from "react";
import logo from "../../logo.svg";
import "../../App.css";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'menu_toggled': false
		};
	}
	render() {
		return (
			<nav>
				<img id="logo" src={logo} />
				<ul id="navbar_ul_items">
					<li target="_blank"> Concept </li>
					<li target="_blank"> Confidenciality </li>
					<li target="_blank"> Contact </li>
					<li target="_blank"> Prices </li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;

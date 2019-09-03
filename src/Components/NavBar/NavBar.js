import React from "react";
import logo from "../../logo.svg";
//import "../../App.css";

const style_menu_inactive = {
	backgroundColor: 'blue',
	display: 'none',
	width: '100%'
};

const style_menu_active = {
	backgroundColor: 'orange',
	display: 'flex',
	width: '100%'
};



class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu_toggled: false,
      menu_closed: "fas fa-bars",
      menu_open: "fas fa-times"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      menu_toggled: !this.state.menu_toggled
    });
    console.log("pressed");
  }

  	render() {
    return (
    <nav>
        {/*<img id="logo" src={logo} /> */}
		<div style={(this.state.menu_toggled ? style_menu_active : style_menu_inactive)}>
          <ul id="navbar_ul_items">
            <li target="_blank"> Concept </li>
            <li target="_blank"> Confidenciality </li>
            <li target="_blank"> Contact </li>
            <li target="_blank"> Prices </li>
          </ul>
    </div>
		<i id="menu_icon" onClick={this.handleClick} className={!this.state.menu_toggled ? this.state.menu_closed: this.state.menu_open}></i>
    </nav>
    );
  }
}

export default NavBar;

import React from "react";
import "./NavBar.css";

/*
// Import material design for navbar
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
*/

const style_menu_inactive = {};
const style_menu_active = {};



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_toggled: true,
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
      <div>
        {/*

        <i id="menu_icon" onClick={this.handleClick} className={!this.state.menu_toggled ? 'nav_bar': this.state.menu_open}></i> 
                  <div
            style={
              this.state.menu_toggled ? style_menu_active : style_menu_inactive
            }
          ></div>

      */} 
         <nav className="nav_bar">
            <div id="navbar_ul_items">
            <ul >
              <li target="_blank"> Concept </li>
              <li target="_blank"> Confidenciality </li>
              <li target="_blank"> Contact </li>
              <li target="_blank"> Prices </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

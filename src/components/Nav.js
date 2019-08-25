import React from "react";
import Logo from "../images/logo@2x.png";
import Lang from "../images/dropdown_header_language@2x.png";

import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img className="logo" src={Logo} alt="logo" />
        <a className="nav-text">ABOUT US</a>
        <a className="nav-text">ROOMS</a>
        <a className="nav-text">CONTACT</a>
        <input type="button" className="book-btn"></input>
        <img className="lang" src={Lang} alt="language" />
      </div>
    );
  }
}

export default Nav;

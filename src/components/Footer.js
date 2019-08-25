import React from "react";
import "./Footer.css";
import Logo from "../images/logo.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Tripadvisor from "../images/tripadvisor.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content-box">
          <div className="row-one">
            <img src={Logo} alt="logo" />
            <div className="contact-infos">
              <span>台北市中山區長春路777號3樓</span>
              <span>Mail: lofthome@mail.com</span>
              <span>Tel: +886 2 2777-77772</span>
            </div>
          </div>
          <div className="row-two">
            <img className="facebook-logo" src={Facebook} alt="facebook" />
            <img className="instagram-logo" src={Instagram} alt="instagram" />
            <img
              className="tripadvisor-logo"
              src={Tripadvisor}
              alt="tripadvisor"
            />
            <span className="copyright">Copyright © 2019 Loft Home</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

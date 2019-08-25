import React from "react";
import Img1 from "../images/image1.png";
import "./Slideshow.css";

class Slideshow extends React.Component {
  render() {
    return (
      <div>
        <img className="slideshow-image" src={Img1} alt="slideshow-one" />
      </div>
    );
  }
}

export default Slideshow;

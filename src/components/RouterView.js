import React from "react";
import Slideshow from "./Slideshow";
import RoomTypes from "./RoomTypes";
import Footer from "./Footer";

class RouterView extends React.Component {
  render() {
    return (
      <div>
        <Slideshow />
        <RoomTypes />
        <Footer />
      </div>
    );
  }
}

export default RouterView;

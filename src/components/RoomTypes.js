import React, { Component } from "react";
import "./RoomTypes.css";

class RoomTypes extends Component {
  constructor() {
    super();
    this.state = {
      roomInfos: []
    };
  }

  componentDidMount() {
    fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
      method: "GET",
      headers: {
        Authorization: `Bearer Kf45TixGlmU1HXi4TjtdHwdtUr0BBcsQAXLbdA3Zg2fqOrNt8c5kqe4xrL1r`
      }
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        let infos = data.items.map(info => {
          return (
            <div key={info.id} className="col">
              <img className="room-pic" src={info.imageUrl} alt="room-pic" />
              <div className="content">
                <h2>{info.name}</h2>
              </div>
            </div>
          );
        });
        this.setState({ roomInfos: infos });
      });
  }

  render() {
    return (
      <div className="room-type-page">
        <div className="container">
          <h1>Room types</h1>
          <div className="col-container">{this.state.roomInfos}</div>
        </div>
      </div>
    );
  }
}

export default RoomTypes;

import React, { Component } from "react";
import "./media.css";

class Media extends Component {
  render() {
    const styles = {
      container: {
        cursor: "pointer",
        marginRight: 15,
        display: "inline-block",
        width: 260,
        "vertical-align": "top",
        color: "#44546b"
        //border: "1px solid red"
      }
    };
    return (
      //<div style={styles.container}>
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            src="./images/covers/bitcoin.jpg"
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">¿Por qué aprender React?...</h3>
          <p className="Media-author">AlbertoVillarejo</p>
        </div>
      </div>
    );
  }
}

export default Media;

import React, { Component } from "react";
import "./video.css";

class Video extends Component {
  render() {
    const { autoplay, src } = this.props;
    return (
      <div className="Video">
        <video autoPlay={autoplay} src={src} />
      </div>
    );
  }
}

export default Video;

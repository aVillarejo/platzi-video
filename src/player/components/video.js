import React, { Component } from "react";
import "./video.css";

class Video extends Component {
  touglePlay() {
    if (this.props.pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.touglePlay();
    }
  }
  setRef = element => {
    this.video = element;
  };
  render() {
    const { handleLoadedMetadata } = this.props;
    const { autoplay, src } = this.props;
    return (
      <div className="Video">
        <video
          autoPlay={autoplay}
          src={src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    );
  }
}

export default Video;

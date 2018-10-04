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
    const {
      autoplay,
      src,
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props;

    return (
      <div className="Video">
        <video
          autoPlay={autoplay}
          src={src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          //={fullScreen}
        />
      </div>
    );
  }
}

export default Video;

import React from "react";
import "./video-player-layout.css";

const VideoPlayerLayout = props => (
  <div
    className="VideoPlayer"
    //style={styles.VideoPlayer}
  >
    {props.children}
  </div>
);

export default VideoPlayerLayout;

const styles = {
  VideoPlayer: {
    width: "100%",
    position: "relative",
    background: "black"
  }
};

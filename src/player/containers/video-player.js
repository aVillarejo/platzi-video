import React, { Component } from "react";
import Layout from "../components/video-player-layout";

class VideoPlayer extends Component {
  render() {
    return (
      <Layout>
        <video
          autoPlay
          controls
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </Layout>
    );
  }
}

export default VideoPlayer;

import React, { Component } from "react";
import Layout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";

class VideoPlayer extends Component {
  render() {
    return (
      <Layout>
        <Title title="Esto es un video chido!" />
        <Video
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </Layout>
    );
  }
}

export default VideoPlayer;

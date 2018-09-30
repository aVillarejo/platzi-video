import React, { Component } from "react";
import Layout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";

class VideoPlayer extends Component {
  state = {
    pause: false
  };

  togglePlay = event => {
    // this.setState({
    //   pause: !this.state.pause
    // });
    this.setState(prevState => ({
      pause: !prevState.pause
    }));
  };
  render() {
    return (
      <Layout>
        <Title title="Aqui va el titulo de un video chido!" />
        <Video
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
      </Layout>
    );
  }
}

export default VideoPlayer;

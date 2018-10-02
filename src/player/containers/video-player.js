import React, { Component } from "react";
import Layout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/vide-player-controls";

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0
  };

  togglePlay = event => {
    // this.setState({
    //   pause: !this.state.pause
    // });
    this.setState(state => ({
      pause: !state.pause
    }));
  };

  componentDidMount() {
    /*si autoplay esta actuvado mutara el estado
      para mostrar el icono de pause, una vez cargado el componente
    */
    if (this.props.autoplay) {
      this.setState(state => ({
        pause: !state.pause
      }));
    }
  }
  handleMetadata = event => {
    this.video = event.target;
    this.setState(state => ({
      duration: this.video.duration
    }));
  };
  render() {
    return (
      <Layout>
        <Title title="Aqui va el titulo de un video chido!" />
        <Video
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          handleLoadedMetadata={this.handleMetadata}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        <Controls>
          <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
          <Timer duration={this.state.duration} />
        </Controls>
      </Layout>
    );
  }
}

export default VideoPlayer;

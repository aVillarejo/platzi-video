import React, { Component } from "react";
import Layout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";

class VideoPlayer extends Component {
  state = {
    pause: true
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

  render() {
    return (
      <Layout>
        <Title title="Aqui va el titulo de un video chido!" />
        <Video
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
      </Layout>
    );
  }
}

export default VideoPlayer;

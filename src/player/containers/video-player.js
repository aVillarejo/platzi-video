import React, { Component } from "react";
import Layout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/video-player-controls";
import {formattedTime} from "../../helpers/timeFormat"

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: "00:00",
    currentTime:"00:00"
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
      duration: formattedTime(this.video.duration)
    }));
  };
  handleTimeUpdate = event =>{
    this.setState(state => ({
      currentTime: formattedTime(this.video.currentTime)
    }));
  }
  render() {
    return (
      <Layout>
        <Title title="Aqui va el titulo de un video chido!" />
        <Video
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          handleLoadedMetadata={this.handleMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        <Controls>
          <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
          <Timer duration={this.state.duration} currentTime={this.state.currentTime}/>
        </Controls>
      </Layout>
    );
  }
}

export default VideoPlayer;

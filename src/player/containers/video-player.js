import React, { Component } from "react";
import Layout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/video-player-controls";
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";

import { formattedTime } from "../../helpers/timeFormat";

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: "00:00",
    currentTime: 0,
    loading: false
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
      // duration: formattedTime(this.video.duration),
      duration: this.video.duration
    }));
  };
  handleTimeUpdate = event => {
    this.setState(state => ({
      // currentTime: formattedTime(this.video.currentTime),
      currentTime: this.video.currentTime
    }));
  };
  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  };

  handleSeeking = event => {
    this.setState({
      loading: true
    });
  };

  handleSeeked = event => {
    this.setState({
      loading: false
    });
  };
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  };
  render() {
    return (
      <Layout>
        <Title title="Aqui va el titulo de un video chido!" />
        <Spinner active={this.state.loading} />
        <Video
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          handleLoadedMetadata={this.handleMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        <Controls>
          <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
          <Volume handleVolumeChange={this.handleVolumeChange} />
          <ProgressBar
            value={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
        </Controls>
      </Layout>
    );
  }
}

export default VideoPlayer;

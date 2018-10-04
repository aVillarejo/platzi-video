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
import FullScreen from "../components/full-screen";

import { formattedTime } from "../../helpers/timeFormat";
import {
  isFullScreen,
  requestFullScreen,
  exitFullScreen
} from "../../helpers/fullscreen-validator";

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: "00:00",
    currentTime: 0,
    loading: false,
    mute: false,
    lastVolume: 1,
    isFull: false
  };

  togglePlay = event => {
    // this.setState({
    //   pause: !this.state.pause
    // });
    this.setState(state => ({
      pause: !state.pause
    }));
    console.log("lastVolume", this.state.lastVolume);
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
    let vol = this.video.volume;
    this.setState(state => ({
      lastVolume: vol
    }));
    console.log("Ajustando volumen a: ", this.video.volume);
  };

  toggleMute = event => {
    if (this.state.mute) {
      //Activar sonido si esta en mute
      console.log("Sonido activado");
      this.setState(state => ({
        mute: !state.mute
      }));
      this.video.volume = this.state.lastVolume;
    } else {
      //Activar mute
      console.log("Mute activado");
      this.setState(state => ({
        mute: !state.mute
      }));
      this.video.volume = 0;
    }
  };

  // toggleFullScreen = event =>{
  //   if (!document.webkitIsFullScreen) {
  //     //Activar sonido si esta en mute
  //     console.log("Activando FullScreen")
  //     this.setState(state => ({
  //       isFull: !state.isFull
  //     }));
  //     this.player.webkitRequestFullscreen()
  //   } else {
  //     //Activar mute
  //     console.log("Saliendo de FullScreen")
  //     this.setState(state => ({
  //       isFull: !state.isFull
  //     }));
  //     document.webkitExitFullscreen();
  //   }
  // };

  toggleFullScreen = event => {
    //Valida si esta en fullScreen en el navegador
    if (!isFullScreen()) {
      //Entra en full screen y aplica un valor al estado para cambiar el icono a mostrar
      console.log("Activando FullScreen");
      this.setState(state => ({
        isFull: !state.isFull
      }));
      requestFullScreen(this.player);
    } else {
      //Sale del FullScreen  y aplica un valor al estado para cambiar el icono a mostrar
      console.log("Saliendo de FullScreen");
      this.setState(state => ({ isFull: !state.isFull }));
      exitFullScreen();
    }
  };

  setRef = element => {
    this.player = element;
  };
  render() {
    return (
      <Layout setRef={this.setRef}>
        <Title title="Aqui va el titulo de un video chido!" />
        <Spinner active={this.state.loading} />
        <Video
          pause={this.state.pause}
          fullScreen={this.state.isFull}
          autoplay={this.props.autoplay}
          handleLoadedMetadata={this.handleMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
        <Controls>
          <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.toggleMute}
            mute={this.state.mute}
            value={this.state.lastVolume}
          />
          <ProgressBar
            value={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <FullScreen
            isFull={this.state.isFull}
            handleClick={this.toggleFullScreen}
          />
        </Controls>
      </Layout>
    );
  }
}

export default VideoPlayer;

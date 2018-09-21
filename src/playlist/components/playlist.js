import React from "react";
import Media from "./media";
import "./playlist.css";

import Play from "../../icon/components/play";
import Volume from "../../icon/components/volume";
import FullScreen from "../../icon/components/fullscreen";
import Pause from "../../icon/components/pause";

function Playlist(props) {
  //const playlist=this.props.data.categories[0].playlist
  const categoria = props.data.categories[0];
  return (
    <div>
      <div className="Playlist divscroll">
        <Play size={50} color="green" />
        <Volume size={50} color="red" />
        <FullScreen size={50} color="blue" />
        <Pause size={50} color="black" />
        {categoria.playlist.map(item => {
          return <Media {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Playlist;

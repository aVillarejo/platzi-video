import React from "react";
import Play from "../../icon/components/play";
import Pause from "../../icon/components/pause";
import "./play-pause.css";

const PlayPause = props => {
  return (
    <div className="PlayPause">
      {props.pause ? (
        <button onClick={props.handleClick}>
          <Play color="white" size={25} />
        </button>
      ) : (
        <button onClick={props.handleClick}>
          <Pause color="white" size={25} />
        </button>
      )}
    </div>
  );
};

export default PlayPause;

import React from "react";
import VolumeIcon from "../../icon/components/volume";
import MuteIcon from "../../icon/components/mute";
import "./volume.css";

const Volume = props => {
  if (!props.mute) {
    return (
      <button className="Volume">
        <div className="Volume-container" onClick={props.handleClick}>
          <VolumeIcon color="white" size={25} />
        </div>
        <div className="Volume-range">
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={props.value}
            onChange={props.handleVolumeChange}
          />
        </div>
      </button>
    );
  }
  return (
    <button className="Volume" onClick={props.handleClick}>
      <MuteIcon color="#c4c4c4" size={25} />
    </button>
  );
};

export default Volume;

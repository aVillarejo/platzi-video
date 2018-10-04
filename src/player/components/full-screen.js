import React from "react";
import FullScreenIcon from "../../icon/components/fullscreen";
import "./full-screen.css";
import "./volume.css";

const FullScreen = props => {
  if (!props.isFull) {
    return (
      <button className="FullScreen">
        <div className="FullScreen-container" onClick={props.handleClick}>
          <FullScreenIcon color="white" size={25} />
        </div>
      </button>
    );
  }
  return (
    <button className="FullScreen" >
      <div className="FullScreen-container" onClick={props.handleClick}>
        <FullScreenIcon color="gray" size={25} />
      </div>
      
    </button>
  );
};


export default FullScreen;

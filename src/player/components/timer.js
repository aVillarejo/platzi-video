import React from "react";
import "./timer.css";

const leftPad=(number)=>{
  const str = '00'
  return str.substring(0,str.length - number.length)+ number;
}

const formattedTime=(secs)=>{
  const minutos = parseInt(secs/60,10)
  const segundos = parseInt(secs % 60,10)
  return `${leftPad(minutos.toString())}:${leftPad(segundos.toString())}`
}
const Timer = props => (
  <div className="Timer">
    <p>
    <span> {formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
    </p>
  </div>
)

export default Timer;

import React from "react";
import Playlist from "./../../playlist/components/playlist";

const Category = props => {
  console.log(props)
  const {playlist, title,description} = props
  return (
    <div>
      <div>
        <p>{description}</p>
        <h2>{title}</h2>  
      </div>
      <div>
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
};
export default Category;

import React from "react";
import Playlist from "./../../playlist/components/playlist";
import "./category.css";

const Category = props => {
  const { playlist, title, description } = props;
  return (
    <div className="Category">
      <p className="Category-description">{description}</p>
      <h2 className="Category-title">{title}</h2>
      <Playlist 
        playlist={playlist}
        handleOpenModal={props.handleOpenModal}
      />
    </div>
  );
};
export default Category;

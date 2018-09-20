import React, { Component } from "react";
import "./media.css";
import PropTypes from "prop-types";
class Media extends Component {
  render() {
    const { title, image, author } = this.props;
    const styles = {
      container: {
        cursor: "pointer",
        marginRight: 15,
        display: "inline-block",
        width: 260,
        "vertical-align": "top",
        color: "#44546b"
        //border: "1px solid red"
      }
    };
    return (
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            src={image}
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

//Validando props

Media.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["video", "audio"]).isRequired
};

export default Media;

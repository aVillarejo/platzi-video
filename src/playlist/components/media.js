import React, { PureComponent } from "react";
import "./media.css";
import PropTypes from "prop-types";
class Media extends PureComponent {
  //EM7
  state = {
    title: this.props.title,
    author: this.props.author,
    cover: this.props.cover
  };

  handleClick = event => {
    //Cambiar uno o varios elementos del estado
    this.props.openModal(this.props);
  };

  render() {
    const { title, cover, author } = this.state;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={cover}
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
  cover: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["video", "audio"]).isRequired
};

export default Media;

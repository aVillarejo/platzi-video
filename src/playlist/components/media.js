import React, { Component } from "react";
import "./media.css";
import PropTypes from "prop-types";
class Media extends Component {
  //EM6

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: props.title,
  //     author: props.author,
  //     image: props.image
  //   };
  // }

  //EM6
  state = {
    title: this.props.title,
    author: this.props.author,
    image: this.props.image
  };

  handleClick = event => {
    //Cambiar uno o varios elementos del estado
    this.setState({
      title: "Foxy Lady",
      author: "Jimi Hendrix",
      image:"https://www.vinyl-eye.com/wp-content/uploads/2017/04/rs-3406-rectangle.jpg"
    });
  };

  render() {
    const { title, image, author } = this.state;

    return (
      <div className="Media" onClick={this.handleClick}>
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

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


class ComponentLifeCycle extends Component{

//Montaje
	constructor(){
    super()
  // Enlazo (bind) eventos y/o inicializo estado
	}
	componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
	}
	render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

//Actualización:
	componentWillReceiveProps(){
  //Es llamado cuando el componente recibe nuevas propiedades.
  //Sirve para actualizar el estado con base a las nuevas propiedades

	}
	shouldComponentUpdate(){
  //Metodo que condiciona si el componente se debe volver a renderizar
  //Utilizado para optimizar el rendimiento
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

  //re-render si es necesario...
	componentDidUpdate(){
	//Método llamado luego del re-render
  }
  
//Desmontado
  componentWillUnmount(){
    //Método llamado antes de desmontar el componente
    
  }

//Manejo de Errores 
      componentDidCatch(){
      // Si ocurre algún error, lo capturo desde acá:
      }
}



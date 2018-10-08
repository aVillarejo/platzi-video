import React from "react";
import Layout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
class Home extends React.Component {
  state = {
    modalVisible: false,
    media: 0
  };

  handleCloseModal = event => {
    this.setState({
      modalVisible: false
    });
  };

  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      //Si el valor de la key se llama igual a la propiedad se aplica sugar sintax
      //media:media
      media: media
    });
  };

  render() {
    return (
      <HandleError>
        <Layout>
          <Related />

          <Categories
            handleOpenModal={this.handleOpenModal}
            categories={this.props.data.categories}
          />
          {this.state.modalVisible && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          )}
        </Layout>
      </HandleError>
    );
  }
}
export default Home;

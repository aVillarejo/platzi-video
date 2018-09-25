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
    modalVisible: false
  };

  handleCloseModal = event => {
    this.setState({
      modalVisible: false
    });
  };

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
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
                <h1>Esto es un modal!</h1>
                <VideoPlayer />
              </Modal>
            </ModalContainer>
          )}
        </Layout>
      </HandleError>
    );
  }
}
export default Home;

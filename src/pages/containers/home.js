import React from "react";
import Layout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related"
import ModalContainer from "../../widgets/containers/modal"
 class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
        <ModalContainer>
          <h1>Este es un modal</h1>
        </ModalContainer>
      </Layout>
    );
  }
}
export default Home;
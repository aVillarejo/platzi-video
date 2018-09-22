import React from "react";
import Layout from "../components/home-layout";
import Categories from "../../categories/components/categories";
export default class Home extends React.Component {
  render() {
    return (
      <Layout>
      <Categories categories={this.props.data.categories}/>
      </Layout>
    );
  }
}

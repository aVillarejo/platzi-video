import React from "react";
import Layout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related"
export default class Home extends React.Component {
  render() {
    return (
      <Layout>
      <Related/>
      <Categories categories={this.props.data.categories}/>
      </Layout>
    );
  }
}

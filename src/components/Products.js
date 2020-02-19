import SubNavabar from "./SubNavbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";

class Products extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.props.dispatch(fetchProducts);
    console.log(this.state.fetchProducts);
  }
  render() {
    return <SubNavabar />;
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.product
  };
}
export default connect(mapStateToProps)(Products);

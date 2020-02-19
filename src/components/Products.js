import SubNavabar from "./SubNavbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";

class Products extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    return (
      <div>
        <p>Products</p>
        <ul>
          {this.props.products.map(dev => {
            console.log("hello", this.props.products);
            return (
              <li>
                {dev.name}
                {dev.imageUrl}
                {dev.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux", reduxState.products);
  return {
    products: reduxState.products
  };
}
export default connect(mapStateToProps)(Products);

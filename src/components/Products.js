import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import "./Products.css";
import ProductBox from "./ProductBox";

class Products extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    return (
      <div>
        <p>Products</p>
        <ProductBox />
        {/* <ul>
          {this.props.products.map(dev => {
            // console.log("hello", this.props.products);
            return (
              <li key={dev.id}>
                <p>{dev.name}</p>
                <img src={dev.imageUrl} />
                <p>€{dev.price}</p>
              </li>
            );
          })}
        </ul> */}
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

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

        {this.props.products.map(dev => {
          return (
            <ProductBox
              id={dev.id}
              name={dev.name}
              imgUrl={dev.imageUrl}
              price={dev.price}
            />
          );
        })}
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

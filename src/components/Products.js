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
    const printList = this.props.products.map(dev => {
      return (
        <ProductBox
          key={dev.id}
          id={dev.id}
          name={dev.name}
          imgUrl={dev.imageUrl}
          price={dev.price}
          inStock={dev.inStock}
        />
      );
    });

    const printSearch = this.props.search.map(item => {
      return (
        <ProductBox
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrl={item.imageUrl}
          price={item.price}
          inStock={item.inStock}
        />
      );
    });

    let toRender = this.props.search.length === 0 ? printList : printSearch;

    return (
      <div className="container">
        <h1>Products</h1>

        <div className="wrapper">{toRender}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux", reduxState.products.list);
  return {
    products: reduxState.products.list,
    search: reduxState.products.search
  };
}
export default connect(mapStateToProps)(Products);

import React from "react";
import "./ProductBox.css";

export default class ProductBox extends React.Component {
  render() {
    const color = this.props.inStock ? "green" : "red";
    const stock = this.props.inStock ? "In stock" : "Not in stock";
    return (
      <div className="box" id={this.props.id}>
        <img src={this.props.imgUrl} />
        <p>{this.props.name} </p>
        <p>
          €{this.props.price}{" "}
          <button id="addToCart">
            <i className="fas fa-cart-plus"></i>
          </button>
        </p>
        <p style={{ color }}>{stock} </p>
      </div>
    );
  }
}

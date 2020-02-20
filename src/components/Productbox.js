import React from "react";
import "./ProductBox.css";

export default class ProductBox extends React.Component {
  clickHandler() {
    console.log("this  is clicked");
    this.props.products(this.props.id);
  }

  render() {
    //console.log(this.props.products(this.props.id));
    const color = this.props.inStock ? "green" : "red";
    const stock = this.props.inStock ? "In stock" : "Not in stock";
    return (
      <div className="box" id={this.props.id}>
        <img src={this.props.imgUrl} />
        <p>{this.props.name} </p>
        <p>
          {this.props.price}{" "}
          <button id="addToCart" onClick={this.clickHandler}>
            <i className="fas fa-cart-plus"></i>
          </button>
        </p>
        <p style={{ color }}>{stock} </p>
      </div>
    );
  }
}

import React from "react";

export default class ProductBox extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <img src={this.props.imgUrl} />
        <p>{this.props.name} </p>
        <p>
          {this.props.price}{" "}
          <button id="addToCart">
            <i className="fas fa-cart-plus"></i>
          </button>
        </p>
      </div>
    );
  }
}

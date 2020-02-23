import React from "react";
import "./ProductBox.css";

export default class ProductBox extends React.Component {
  render() {
    //console.log(this.props.products(this.props.id));
    const color = this.props.inStock ? "green" : "red";
    const stock = this.props.inStock ? "In stock" : "Not in stock";
    const orderButton = this.props.inStock ? (
      <span id="addToCart" onClick={this.props.clickHandler}>
        <i className="fas fa-cart-plus"></i>
      </span>
    ) : (
      " "
    );
    return (
      <div className="box" id={this.props.id}>
        <img src={this.props.imgUrl} />
        <p>{this.props.name} </p>
        <p>
          € {this.props.price} {orderButton}
        </p>
        <p style={{ color }}>{stock} </p>
      </div>
    );
  }
}

// function mapStateToProps(reduxState) {
//   console.log("these are added", reduxState.products.cart);
//   return {
//     Cart: reduxState.products.cart
//   };
// }

// export default connect(mapStateToProps)(ProductBox);

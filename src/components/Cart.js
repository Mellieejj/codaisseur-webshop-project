import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";

class Cart extends Component {
  render() {
    const countedCart = {};
    this.props.cart.forEach(function(product) {
      if (countedCart[product.name]) {
        countedCart[product.name].qty += 1;
      } else {
        countedCart[product.name] = {
          product: product,
          qty: 1
        };
      }
    });

    console.log("counting", countedCart);
    console.log("incart", this.props.cart);
    return (
      <div>
        <h1>Your Cart</h1>
        <div>
          {this.props.cart.map(cart => {
            return (
              <div className="cartBox" id="cart.id">
                <img src={cart.imageUrl} />
                <p>{cart.name}</p>
                <p>€{cart.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("cartPage", reduxState.products.cart);
  return {
    products: reduxState.products.list,
    cart: reduxState.products.cart
  };
}
export default connect(mapStateToProps)(Cart);

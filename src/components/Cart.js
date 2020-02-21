import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";

class Cart extends Component {
  render() {
    console.log("incart", this.productswithqty);
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
                <p>Quantity:{cart.quantity}</p>
                <p>{this.total}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  //console.log("cartPage", reduxState.products.cart);
  return {
    products: reduxState.products.list,
    cart: reduxState.products.cart
  };
}
export default connect(mapStateToProps)(Cart);

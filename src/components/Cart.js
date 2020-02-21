import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import { cartAdd, cartSubtract } from "../store/products/actions";

class Cart extends Component {
  // clickHandler = id => {
  //   this.props.dispatch(cartAdd(id));
  //   console.log("id", id);
  // };
  render() {
    const total = this.props.cart.reduce((acc, curr) => {
      const newPrice = (
        Math.round(+(curr.price * curr.quantity) * 100) / 100
      ).toFixed(2);
      return +newPrice + acc;
    }, 0);

    //console.log("incart", this.total);
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
                <button onClick={() => this.props.dispatch(cartAdd(cart.id))}>
                  Add Quantity
                </button>
                <button
                  onClick={() => this.props.dispatch(cartSubtract(cart.id))}
                >
                  Subtract Quantity
                </button>
              </div>
            );
          })}
        </div>
        Total price: € {total.toFixed(2)}
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

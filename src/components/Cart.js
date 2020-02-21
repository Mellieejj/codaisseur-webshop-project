import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";

class Cart extends Component {
  // productswithqty.reduce

  render() {
    //const productswithqty = this.props.cart.map(a => ppa.id);

    //console.log("id's", arr);
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

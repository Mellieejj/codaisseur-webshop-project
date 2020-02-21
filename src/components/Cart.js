import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProductBox.css";

class Cart extends Component {
  //const productswithqty =
  render() {
    console.log("incart", this.props.cart);
    return (
      <div>
        <h2>THIS IS YOUR CART</h2>
        <div>
          <div className="cart">
            {this.props.cart.map(cart => {
              return (
                <li>
                  <p>{cart.name}</p>
                  <p>{cart.price}</p>
                  <img src={cart.imageUrl} />
                </li>
              );
            })}
          </div>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import "./CheckoutForm.css";

class CheckoutForm extends Component {
  render() {
    return (
      <div>
        <h1>Checkout Form</h1>
        <div className="wrapper">
          <div className="cart-total">
            <ul>
              {this.props.cart.map(item => {
                return (
                  <li key={item.id}>
                    {item.name} {item.quantity} {item.price}
                  </li>
                );
              })}
            </ul>
            <p>Total price: </p>
          </div>
          <div className="form">
            <form>
              <label> Name: </label>
              <input type="text" name="name" />
              <br />
              <label>Street: </label>
              <input type="text" name="street" />
              <br />
              <label>Number:</label>
              <input type="number" name="houseNr" /> <br />
              <label>Postcode:</label>
              <input type="text" name="postcode" /> <br />
              <label>City:</label>
              <input type="text" name="City" /> <br />
              <label>Phone Number:</label>
              <input type="number" name="phone" />
              <br />
              <button>Send</button> <button> Reset </button>
            </form>
          </div>
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
export default connect(mapStateToProps)(CheckoutForm);

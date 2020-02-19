import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/"> Home</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    );
  }
}

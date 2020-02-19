import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <section className="nav">
        <div>
          <Link to="/">
            <div className="dropdown">
              <div className="dropdown__hover">Home</div>
            </div>{" "}
          </Link>
        </div>
        <div>
          <Link to="/products">
            <div className="dropdown">
              <div className="dropdown__hover">Products</div>
            </div>{" "}
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <div className="dropdown">
              <div className="dropdown__hover">Cart</div>
            </div>{" "}
          </Link>
        </div>
      </section>
    );
  }
}

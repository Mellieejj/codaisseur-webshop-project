import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class SubNavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/products">Categories</Link>
        </div>
      </div>
    );
  }
}

import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./NavBar.css";
import { filterSearch } from "../store/products/actions";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {
    search: ""
  };
  handleSearch = () => {
    this.props.dispatch(filterSearch(this.state.search));
  };

  handleChange = e => {
    // console.log("search typing: ", this.state.search);

    this.setState({
      search: e.target.value
    });
  };
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
              <div className="dropdown__hover">
                <i class="fas fa-shopping-cart"></i> Cart:{" "}
                {this.props.cart.length}{" "}
              </div>
            </div>{" "}
          </Link>
        </div>
        <input
          type="text"
          name="search"
          placeholder="search for a product"
          onChange={this.handleChange}
          value={this.state.search}
        />
        <button onClick={this.handleSearch}>Search</button>
      </section>
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

export default connect(mapStateToProps)(NavBar);

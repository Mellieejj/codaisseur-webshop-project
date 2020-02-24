import React, { Component } from "react";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <header className="wrapper">
          <h1> Welkom in this Shop </h1>
        </header>
        <main className="foto-container">
          <div className="categorie-buttons">
            <div>
              <h3>Product Categories</h3>
            </div>
            <div>Baby Teethers</div>
            <div>Cuddle Cloth</div>
            <div>Cuddle Toys</div>
            <div>Keychains</div>
          </div>
          <div className="foto"></div>
        </main>
      </div>
    );
  }
}

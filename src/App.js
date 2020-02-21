import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

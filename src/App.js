import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route path="/products" component={ Products} /> */}
        {/* <Route path="/cart" component={ Cart } /> */}
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

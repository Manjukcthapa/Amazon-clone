import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home"
import CheckOut from "./Component/CheckOut"
import "./App.css";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>checkout!!</h1>
          <CheckOut/>
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

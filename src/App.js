import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>checkout!!</h1>
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
          <h1>HpmePage!!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

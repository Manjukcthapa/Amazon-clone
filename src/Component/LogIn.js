import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LogIn.css";
import {auth} from "./Firebase";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {

    })
    .catch(e => alert(e.message))
    history.push("/");
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {

    })
    .catch(e => alert(e.message))
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"
          alt=""
        />
      </Link>
      <div className="login-container">
        <form>
          <h1 className="header1">Sign In</h1>
          <h5 className="header5">E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="inputs"
            type="email"
          />
          <h5 className="header5">Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="inputs"
            type="password"
          />
          <button onClick={login} type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="para">
          By Signing-in you agree to Amazoon's Conditions of see our Privacy
          Notice, our Cookies Notice, our Cookies and our interest-Based Add
          Notice.
        </p>
        <button onClick={register} className="amazonregister-button">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIn;

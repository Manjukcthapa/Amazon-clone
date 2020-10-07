import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";


function LogIn() {
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
          <input className="inputs" type="text" />
          <h5 className="header5">Password</h5>
          <input  className="inputs" type="text" />
          <button className="signin-button">Sign In</button>
        </form>
        <p className="para">
          By Signing-in you agree to Amazoon's Conditions of see our Privacy
          Notice, our Cookies Notice, our Cookies and our interest-Based Add
          Notice.
        </p>
        <button className="register-button">Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default LogIn;

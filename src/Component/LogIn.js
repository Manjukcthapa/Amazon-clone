import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
function LogIn() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <form>
          <h1>Sign In</h1>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button>Sign In</button>
        </form>
        <p >
          By Signing-in you agree to Amazoon's Conditions of see our Privacy
          Notice, our Cookies Notice, our Cookies and our interest-Based Add
          Notice.
        </p>
        <button>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default LogIn;

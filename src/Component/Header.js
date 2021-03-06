import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, searchTerm, user }, dispatch] = useStateValue();

  const updateSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch({
      type: "UPDATE_SEARCH",
      searchTerm: searchTerm,
    });
  };

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header-search">
        <input
          type="text"
          value={searchTerm}
          onChange={updateSearch}
          className="header_searchInput"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/logIn"} className="header-link">
          <div onClick={login} className="header_option">
            <span className="option-one">Hello {user?.email}</span>
  <span className="option-two">{user? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="" className="header-link">
          <div className="header_option">
            <span className="option-one">Returns</span>
            <span className="option-two">& Orders</span>
          </div>
        </Link>
        <Link to="" className="header-link">
          <div className="header_option">
            <span className="option-one">Your,</span>
            <span className="option-two">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket">
            <ShoppingBasketIcon className="shoppingBasketIcon" />
            <span className="option-two basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;

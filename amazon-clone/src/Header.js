import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header0">
      <div className="header">
        <Link to="/">
        <img
          className="header--logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
        </Link>
        <div className="header--search">
          <input className="header--searchInput" type="text" />
          {/* Material UI */}
          <SearchIcon className="header--searchIcon" />
        </div>

        <div className="header--nav">
          <div className="header--option">
            <span className="header--optionLineOne">Hello Guest</span>
            <span className="header--optionLineTwo">Sign In</span>
          </div>

          <div className="header--option">
            <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">Order</span>
          </div>

          <div className="header--option">
            <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
          </div>
        </div>

        <Link to="/checkout">
        <div className="header--optionBasket">
          <ShoppingCartIcon />
          <span className="header--optionLineTwo header--BasketCount">0</span>
        </div>
        </Link>
        
      </div>

      <div className="header2">

        <div className="header--nav">
          <div className="header--option">
            <button className="header2--button">Computers</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Best Sellers</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Health, Household & Personal Card</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Home Improvement</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Gift Cards</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Baby</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Gift Ideas</button>
          </div>

          <div className="header--option">
            <button className="header2--button">Kindle eBooks</button>
          </div>

        </div>




      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import logo from "../../assets/images/gradient.png";
import phone from "../../assets/icons/icons8-phone-30.png";
import login from "../../assets/icons/user(3).png";
import shoppingCart from "../../assets/icons/shopping-cart(1).png";

const SearchBar = () => {
  return (
    <div className="topheader">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <div className="main-searchbar">
        <div className="searchbar">
          <button className="searchbar-btn" type="submit">
            <svg
              className="searchbar-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="جستجوی محصول"
            className="searchbar-input"
          />
        </div>
      </div>

      <div className="left-header">
        <div className="phone">
          <span>09123456789</span>
          <img src={phone} alt="phone" className="left-header_img" />
        </div>
        <div className="login ">
          <a href="../Cart/cart.js" className="a-login">
            <img src={login} alt="login" className="left-header_img" />
            <span>ورود و ثبت نام</span>
          </a>
        </div>

        <div className="cartt">
          <a href="v" className="a-login">
            <img
              src={shoppingCart}
              alt="shopping cart"
              className="left-header_img"
            />
            <div className="cart-content">
              <span>0</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

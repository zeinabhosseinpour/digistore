import React, { Fragment } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header">
        <div className="container">
          <div className="header-div">
            <SearchBar />
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

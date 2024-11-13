import React from "react";
import Search from "./Search";

const Header = ({ title, onSearch }) => {
  return (
    <header>
      <nav className="navbar navbar-custom">
        <a className="navbar-brand">{title || "FinProH8"}</a>
        <form className="search" role="search">
          <Search onSearch={onSearch} />
        </form>
      </nav>
    </header>
  );
};

export default Header;

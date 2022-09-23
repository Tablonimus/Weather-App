import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="flexing">
      <span>
        <img
          id="logoHenry"
          src={Logo}
          alt=""
          width="35"
          height="40"
          className="d-inline-block align-text-top"
        />
        <span>Henry - Weather App</span>
      </span>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;

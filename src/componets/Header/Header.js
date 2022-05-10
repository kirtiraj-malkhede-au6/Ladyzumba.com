import React from "react";
import { ImSearch } from "react-icons/im";
import "./Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="logo-box">
          <h1 className="logo">
            <a href="">LADY|ZUMB△</a>
          </h1>
        </div>

        <div className="login-btn-box">
          <button className="login-btn">Login</button>
        </div>
      </nav>
      <nav className="second-navbar">
        <div className="navlinks">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="search-box">
          <div className="icon-box">
            <ImSearch className="search-icon" />
          </div>
          <input type="text" placeholder="Search something..."></input>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;

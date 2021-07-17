import React from "react";

const Header = () => {
  return (
    <nav>
      <h4 className="logo">Dames.</h4>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-link">
      <h1 className="text-5xl font-bold text-blue-600">
        Welcome to our Fancy Website!!!!
      </h1>
      <div className="bg-blue-500 p-2 m-3">
        <Link to="/home">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;

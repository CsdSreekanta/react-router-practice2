import React from "react";
import CustomLink from "../components/CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="">
      <h1 className="text-5xl font-bold text-blue-600">
        Welcome to our Fancy Website!!!!
      </h1>
      <div className="nav-link bg-blue-500 p-2 m-3">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </div>
    </nav>
  );
};

export default Header;

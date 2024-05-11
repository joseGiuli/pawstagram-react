import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <>
      <Navbar>
        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>
      </Navbar>
    </>
  );
};

export default Header;

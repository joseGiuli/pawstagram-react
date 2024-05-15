import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarLink,
  NavbarContainer,
  Logo,
  Usuario,
} from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavbarLink to="/" aria-label="Logo">
            <Logo />
          </NavbarLink>

          <NavbarLink to="/login" className="login">
            Login
            <Usuario />
          </NavbarLink>
        </NavbarContainer>
      </Navbar>
    </>
  );
};

export default Header;

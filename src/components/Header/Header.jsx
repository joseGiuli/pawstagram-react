import React from "react";
import {
  Navbar,
  NavbarLink,
  NavbarContainer,
  LogoSVG,
  UsuarioSVG,
} from "./HeaderStyles";

import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavbarLink to="/" aria-label="Logo">
            <LogoSVG />
          </NavbarLink>
          {data ? (
            <NavbarLink to="/conta" className="login">
              <strong>{data.nome}</strong>
              <UsuarioSVG />
            </NavbarLink>
          ) : (
            <NavbarLink to="/login" className="login">
              Login / Criar conta
              <UsuarioSVG />
            </NavbarLink>
          )}
        </NavbarContainer>
      </Navbar>
    </>
  );
};

export default Header;

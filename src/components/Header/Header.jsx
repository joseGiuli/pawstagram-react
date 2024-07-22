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
            <LogoSVG size="44px" />
          </NavbarLink>
          {data ? (
            <>
              <NavbarLink to="/conta/feed">
                <strong>{data.nome}</strong>
                <UsuarioSVG />
              </NavbarLink>
            </>
          ) : (
            <NavbarLink to="/login">
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

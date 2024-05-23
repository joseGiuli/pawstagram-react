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
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavbarLink to="/" aria-label="Logo">
            <LogoSVG />
          </NavbarLink>
          {data ? (
            <>
              <NavbarLink to="/conta" className="login">
                <strong>{data.nome}</strong>
                <UsuarioSVG />
                <button onClick={userLogout}>Sair</button>
              </NavbarLink>
            </>
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

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { ReactComponent as LogoAsset } from "../../assets/dogs.svg";
import { ReactComponent as UserAsset } from "../../assets/usuario.svg";

export const LogoSVG = styled(LogoAsset)`
  width: max-content;
  height: max-content;
`;

export const UsuarioSVG = styled(UserAsset)`
  width: max-content;
  height: max-content;
  margin-left: 0.5rem;
`;

export const Navbar = styled.nav`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0 0.5rem;
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: white;
  top: 0;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const NavbarLink = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s;

  font-weight: 500;

  &:hover,
  &:focus {
    opacity: 0.75;
    transition: all 0.2s;
  }
  &:active {
    color: ${(props) => props.theme.colors.black};
  }
`;

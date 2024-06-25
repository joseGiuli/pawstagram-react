import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Forms/Button/Button";
import { ButtonStyled } from "../Forms/Button/ButtonStyles";
import {
  EstatisticasSVG,
  FeedSVG,
  LogoutSVG,
  NavWrapper,
  PostarSVG,
  StyledNavLink,
} from "./UserNavHeaderStyles";
import styled from "styled-components";
import { UserContext } from "../../UserContext";

const UserNavHeader = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <NavWrapper>
      <StyledNavLink to="/conta">
        <FeedSVG />
        Minhas Fotos
      </StyledNavLink>
      <StyledNavLink to="/conta/estatisticas">
        <EstatisticasSVG />
        Estatísticas
      </StyledNavLink>
      <StyledNavLink to="/conta/postar">
        <PostarSVG />
        Adicionar Fotos
      </StyledNavLink>
      <ButtonStyled onClick={userLogout}>
        <LogoutSVG />
        air
      </ButtonStyled>
    </NavWrapper>
  );
};

export default UserNavHeader;

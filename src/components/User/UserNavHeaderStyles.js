import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

import { ReactComponent as MinhasFotosAsset } from "../../assets/feed.svg";
import { ReactComponent as EstatisticasAsset } from "../../assets/estatisticas.svg";
import { ReactComponent as PostarAsset } from "../../assets/adicionar.svg";
import { ReactComponent as LogoutAsset } from "../../assets/sair.svg";

const sharedStyles = css`
  background-color: ${(props) => props.theme.colors.lightOrange};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${(props) => props.theme.colors.black};
  border-radius: 0.25rem;
  width: 2.875rem;
  height: 2.875rem;
  transition: ease-in 0.15s;

  &:hover,
  &:focus {
    transition: ease-out 0.15s;
    background-color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.orange};
    background-color: ${(props) => props.theme.colors.white};
    scale: 1.12;

    svg > * {
      fill: ${(props) => props.theme.colors.orange};
    }
  }
`;

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  ${sharedStyles}

  &.active {
    transition: ease-out 0.15s;
    background-color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.orange};
    background-color: ${(props) => props.theme.colors.white};
    scale: 1.12;
  }

  &.active svg > * {
    fill: ${(props) => props.theme.colors.orange};
  }
`;

export const ExitButton = styled.button`
  ${sharedStyles}
`;

//SVGs
const BaseSVG = styled.svg`
  width: max-content;
  height: max-content;
`;

export const FeedSVG = styled(MinhasFotosAsset)`
  ${BaseSVG}
`;

export const EstatisticasSVG = styled(EstatisticasAsset)`
  ${BaseSVG}
`;

export const PostarSVG = styled(PostarAsset)`
  ${BaseSVG}
`;

export const LogoutSVG = styled(LogoutAsset)`
  ${BaseSVG}
`;

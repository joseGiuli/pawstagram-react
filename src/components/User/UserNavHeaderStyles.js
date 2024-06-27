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
    cursor: pointer;

    svg > * {
      fill: ${(props) => props.theme.colors.orange};
    }
  }
`;

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  &.navMobile {
    display: block;

    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  &.navMobile a,
  &.navMobile button {
    display: flex;
    justify-content: flex-start;
    color: black;
    text-align: left;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  &.navMobile a:hover svg > *,
  &.navMobile button:hover > * {
    fill: ${(props) => props.theme.colors.orange};
    ${(props) => props.theme.colors.orange};
  }

  &.navMobile svg {
    margin-right: 0.5rem;
  }

  &.navMobile button {
    border: none;
  }

  &.navMobileActive {
    transition: all 0.3s;
    transform: initial;
    opacity: 1;
    pointer-events: initial;

    z-index: 100;
  }
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

export const MobileButton = styled.button`
  ${sharedStyles}
  padding: 0;
  &::after {
    content: "";
    display: block;
    transition: ease-in 0.2s;

    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }

  &:focus,
  &:hover,
  &.mobileButtonActive {
    outline: none;

    background: ${(props) => props.theme.colors.white};
    box-shadow: 0 0 0 3px #fea;
    border-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.orange};
  }

  &.mobileButtonActive::after {
    content: "";
    transition: ease-in 0.2s;
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
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

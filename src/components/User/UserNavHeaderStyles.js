import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as MinhasFotosAsset } from "../../assets/feed.svg";
import { ReactComponent as EstatisticasAsset } from "../../assets/estatisticas.svg";
import { ReactComponent as PostarAsset } from "../../assets/adicionar.svg";
import { ReactComponent as LogoutAsset } from "../../assets/sair.svg";

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

export const NavWrapper = styled.nav``;

export const StyledNavLink = styled(NavLink)`
  color: #000;

  &:hover {
    opacity: 0.9;
  }
`;

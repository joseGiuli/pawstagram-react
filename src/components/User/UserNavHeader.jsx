import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  EstatisticasSVG,
  ExitButton,
  FeedSVG,
  LogoutSVG,
  NavWrapper,
  PostarSVG,
  StyledNavLink,
} from "./UserNavHeaderStyles";
import { UserContext } from "../../UserContext";

const UserNavHeader = () => {
  const navLinks = [
    {
      to: "/conta/feed",
      icon: FeedSVG,
      label: "Minhas Fotos",
    },
    {
      to: "/conta/estatisticas",
      icon: EstatisticasSVG,
      label: "Estatísticas",
    },
    {
      to: "/conta/postar",
      icon: PostarSVG,
      label: "Adicionar fotos",
    },
  ];

  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <NavWrapper>
      {navLinks.map((link, index) => (
        <StyledNavLink key={index} to={link.to}>
          <link.icon />
          {mobile && link.label}
        </StyledNavLink>
      ))}
      <ExitButton onClick={handleLogout}>
        <LogoutSVG />
        {mobile && "Sair"}
      </ExitButton>
    </NavWrapper>
  );
};

export default UserNavHeader;

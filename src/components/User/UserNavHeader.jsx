import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  EstatisticasSVG,
  ExitButton,
  FeedSVG,
  LogoutSVG,
  MobileButton,
  NavWrapper,
  PostarSVG,
  StyledNavLink,
} from "./UserNavHeaderStyles";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";

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

const UserNavHeader = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    const confirm = window.confirm("Você tem certeza que quer sair?");

    if (confirm) {
      userLogout();
      navigate("/login");
    }
  }

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label="menu"
          className={`${mobileMenu ? "mobileButtonActive" : ""} `}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <NavWrapper
        className={`${mobile ? "navMobile" : ""} ${
          mobileMenu ? "navMobileActive" : ""
        } `}
      >
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
    </>
  );
};

export default UserNavHeader;

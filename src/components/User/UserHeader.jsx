import React from "react";
import Title from "../../ui/typography/Title";
import UserNavHeader from "./UserNavHeader";
import { HeaderStyled } from "./UserHeaderStyles";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [location]);

  return (
    <HeaderStyled>
      <Title>{title}</Title>
      <UserNavHeader />
    </HeaderStyled>
  );
};

export default UserHeader;

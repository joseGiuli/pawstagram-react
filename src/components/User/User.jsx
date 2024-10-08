import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Section } from "./UserStyles";

import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import Head from "../Helpers/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Section>
      <Container>
        <Head title="Minha conta" />
        <UserHeader />
        <Routes>
          <Route path="feed" element={<Feed user={data.id} />} />
          <Route path="postar" element={<UserPhotoPost />} />
          <Route path="estatisticas" element={<UserStats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Section>
  );
};

export default User;

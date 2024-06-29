import React from "react";
import { Container } from "../../styles/GlobalStyles";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";

const User = () => {
  return (
    <section>
      <Container>
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="postar" element={<UserPhotoPost />} />
          <Route path="estatisticas" element={<UserStats />} />
        </Routes>
      </Container>
    </section>
  );
};

export default User;

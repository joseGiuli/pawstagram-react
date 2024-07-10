import React from "react";
import Feed from "../Feed/Feed";
import { SectionHome } from "./HomeStyles";

import { Container } from "../../styles/GlobalStyles";

const Home = () => {
  return (
    <SectionHome>
      <Container>
        <Feed />
      </Container>
    </SectionHome>
  );
};

export default Home;

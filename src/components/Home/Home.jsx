import React from "react";
import Feed from "../Feed/Feed";
import { SectionHome } from "./HomeStyles";

import { Container } from "../../styles/GlobalStyles";
import Head from "../Helpers/Head";

const Home = () => {
  return (
    <SectionHome>
      <Container>
        <Head title="Fotos" description="Home Pawnstagram" />
        <Feed />
      </Container>
    </SectionHome>
  );
};

export default Home;

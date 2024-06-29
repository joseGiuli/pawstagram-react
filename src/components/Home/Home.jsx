import React from "react";
import Feed from "../Feed/Feed";
import { Section } from "./HomeStyles";
import { Container } from "../../styles/GlobalStyles";

const Home = () => {
  return (
    <Section>
      <Container>
        <Feed />
      </Container>
    </Section>
  );
};

export default Home;

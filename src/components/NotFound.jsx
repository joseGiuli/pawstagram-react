import React from "react";
import { Container, Section } from "../styles/GlobalStyles";
import Title from "../ui/typography/Title";
import Paragraph from "../ui/typography/Paragraph";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Title color="orange" size="3.25rem" margin="2rem 0 .75rem">
          ERROR 404
        </Title>
        <Paragraph color="black" weight="500">
          Página não encontrada =(
          <br />
          Por favor, tente novamente
        </Paragraph>
      </Container>
    </Section>
  );
};

export default NotFound;

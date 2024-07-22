import styled from "styled-components";
import { FormStyled, SectionAnimated } from "../../styles/GlobalStyles";
import Input from "../Forms/Input/Input";

export const SectionStyled = styled(SectionAnimated)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 0;

  ${FormStyled} {
    gap: 1.5rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const ImagePreview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: "";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;

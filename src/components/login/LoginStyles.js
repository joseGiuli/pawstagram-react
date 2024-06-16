import styled from "styled-components";
import { Section } from "../../styles/GlobalStyles";

export const LoginWrapper = styled.div`
  width: min(100%, 1200px);
  min-height: calc(90vh - 4rem);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  overflow: hidden;
  border: solid 1px #f1f1f1;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }

  &::after {
    content: "";
    display: block;
    background: url("/images/bg-login.png") no-repeat center center;
    background-size: cover;
  }
`;

export const LoginSection = styled.section`
  padding: 2rem 1rem;
`;

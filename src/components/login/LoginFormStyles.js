import styled from "styled-components";
import { FormStyled } from "../../styles/GlobalStyles";

export const RegistrarWrapper = styled.span`
  color: ${(props) => props.theme.colors.blue};

  a {
    color: ${(props) => props.theme.colors.blue};
    font-weight: 600;
    transition: ease-in 0.2s;

    &:hover {
      opacity: 0.75;
      text-decoration: underline;
      transition: ease-out 0.2s;
    }
  }
`;

export const LoginFormStyled = styled(FormStyled)`
  .esqueci {
    font-size: 1rem;
    align-self: flex-end;
    display: block;
    color: ${(props) => props.theme.colors.blue};
    transition: ease-in 0.2s;

    &:hover {
      opacity: 0.75;
      text-decoration: underline;
      transition: ease-out 0.2s;
    }
  }
`;

export const FormWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  display: grid;
  border: solid 1px #f1f1f1;
  border-radius: 12px;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: min(100%, 1200px);
  margin: 0 auto;

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }
`;

export const BackgroundComponent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/bg-login.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

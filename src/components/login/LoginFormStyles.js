import styled from "styled-components";
import { FormStyled } from "../../styles/GlobalStyles";

export const RegistrarWrapper = styled.span`
  color: ${(props) => props.theme.colors.blue};

  a {
    color: ${(props) => props.theme.colors.blue};
    font-weight: 600;
    transition: ease-out 0.2s;

    &:hover {
      opacity: 0.75;
      text-decoration: underline;
      transition: ease-in 0.2s;
    }
  }
`;

export const LoginFormStyled = styled(FormStyled)`
  a {
    font-size: 1rem;
    font-weight: 600;
    align-self: flex-end;
    display: block;
    color: ${(props) => props.theme.colors.blue};
    transition: ease-out 0.2s;

    &:hover {
      opacity: 0.75;
      text-decoration: underline;
      transition: ease-in 0.2s;
    }
  }
`;

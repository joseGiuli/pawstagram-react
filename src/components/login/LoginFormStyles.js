import styled from "styled-components";

export const CadastroWrapper = styled.div`
  /* position: relative;
    margin-bottom: 1rem;
    &::after {
      content: "";
      width: 40px;
      border-radius: 6px;
      height: 4px;
      display: block;
      background-color: ${(props) => props.theme.colors.orange};
      left: 0;
      top: 50%;
    } */

  .esqueci {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.blue};
    display: block;
    margin-bottom: 1.5rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormStyled = styled.form`
  margin-bottom: 1.5rem;
`;

export const LoginSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  gap: 2rem;
`;

export const FormWrapper = styled.div``;

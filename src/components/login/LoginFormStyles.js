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
  padding: 2rem;
`;

export const FormWrapper = styled.div`
  overflow: hidden;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  display: grid;
  border: solid 1px #f1f1f1;
  border-radius: 12px;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: min(100%, 1200px);
  margin: 0 auto;
`;

export const BackgroundComponent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/bg-login.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

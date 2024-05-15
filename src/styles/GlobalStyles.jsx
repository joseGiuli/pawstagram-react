import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

//CSS GLOBAL STYLES
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-top: 4rem;
    font-family: 'Montserrat';
    font-weight: 400;
    /* color: #252525; */
    color: ${(props) => props.theme.colors.black};
  }

  h1, h2, h3, h4 {
    margin: 0;

  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0
  }

  a {
    text-decoration: none;
  }

img {
  display: block;
  max-width: 100%;
}





button, input {
  display: block;
  font-size: 1.25rem;
  
}


`;

//STYLED COMPONENTS STYLES
export const Container = styled.div`
  max-width: 75rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export default GlobalStyles;

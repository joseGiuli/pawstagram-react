import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s;
  text-decoration: underline;

  &:hover,
  &:focus {
    opacity: 0.75;
    transition: all 0.2s;
  }
`;

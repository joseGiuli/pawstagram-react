import styled from "styled-components";
import React from "react";

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorStyled>{error}</ErrorStyled>;
};

export default Error;

export const ErrorStyled = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 1rem 0;
`;

import styled from "styled-components";
import React from "react";

const ErrorStyled = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 1rem 0;
`;

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorStyled>{error}</ErrorStyled>;
};

export default Error;

import styled from "styled-components";

export const ButtonStyled = styled.button`
  position: relative;
  border: none;
  min-width: 8rem;
  overflow: hidden;
  z-index: 1;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  transition: all 0.3s;
  cursor: pointer;

  &:after {
    content: "";
    border: none;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 0.5rem;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.deepBlue};
    transition: all 0.3s;
    border-radius: 0.5rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

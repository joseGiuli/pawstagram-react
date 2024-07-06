import styled from "styled-components";

export const ButtonDelete = styled.button`
  background: ${(props) => props.theme.colors.white};
  padding: 4px 8px;
  color: ${(props) => props.theme.colors.orange};
  line-height: 1;
  border: 0.0625rem solid ${(props) => props.theme.colors.orange};
  font-weight: bold;

  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    background: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.white};
    scale: 1.05;
  }
`;

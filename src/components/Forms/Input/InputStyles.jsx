import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  display: block;
  font-size: 1rem;
  border: solid 2px #eee;
  padding: 0.75rem 1rem;
  transition: 0.2;
  border-radius: 0.5rem;

  &:focus,
  &:hover {
    outline: none;
    transition: all 0.2s;
    border: solid 2px #d8d8d8;
    background-color: white;
    box-shadow: 10px 10px 12px -12px rgba(190, 190, 190, 0.75);
  }
`;

export const ErrorMessage = styled.p`
  color: #ee4238;
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

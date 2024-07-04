import styled from "styled-components";
import { ReactComponent as EnviarAsset } from "../../assets/enviar.svg";

export const CommentsForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin-top: 1.25rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  display: block;
  font-size: 1rem;
  border: 1px solid #eee;
  background-color: #eee;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.orange};
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const CommentsButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;

  &:focus svg > *,
  &:hover svg > * {
    transition: ease-in 0.15s;
    fill: ${(props) => props.theme.colors.orange};
  }

  &:focus svg > g,
  &:hover svg > g {
    animation: latir 0.5s infinite;
  }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const EnviarSVG = styled(EnviarAsset)`
  width: max-content;
  height: max-content;
`;

export const CommentList = styled.ul`
  overflow-y: auto;
  word-break: break-all;
`;

export const CommentItem = styled.li`
  b {
  }

  span {
  }
`;

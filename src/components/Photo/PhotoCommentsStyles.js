import styled from "styled-components";
import { ReactComponent as EnviarAsset } from "../../assets/enviar.svg";

export const CommentsForm = styled.form``;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
`;

export const CommentsButton = styled.button`
  padding: 6px 1rem;
`;

export const EnviarSVG = styled(EnviarAsset)`
  width: max-content;
  height: max-content;
`;

export const CommentList = styled.ul``;

export const CommentItem = styled.li`
  b {
  }

  span {
  }
`;

import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: grid;
`;

export const Imagem = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: opacity 0.2s;
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  position: relative;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

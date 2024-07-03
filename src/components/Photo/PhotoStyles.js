import styled from "styled-components";
import visualizacaoBlack from "../../assets/visualizacao-black.svg";

export const PhotoWrapper = styled.div``;

export const PhotoContentWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 35rem;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  display: grid;
  grid-template-columns: 35rem 20rem;
  grid-template-rows: auto 1fr auto;
  opacity: 0;
  scale: 0.8;
  animation: scaleUp 0.3s forwards;

  @media (max-width: 63rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

  @keyframes scaleUp {
    to {
      opacity: initial;
      scale: initial;
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    grid-row: 1 / 4;

    @media (max-width: 63rem) {
      grid-row: 1;
    }
  }
`;

export const ImageDetails = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const Titulo = styled.h2`
  font-size: 3rem;
  position: relative;
  a {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const Acessos = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${visualizacaoBlack});
    background-size: cover; /* Ajusta a imagem para cobrir totalmente o espaço disponível */
  }
`;

export const Atributos = styled.ul`
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0 2rem;
`;

export const Item = styled.li`
  margin-right: 2rem;

  &::before {
    content: "";
    display: inline-block;
    position: relative;
    top: 2px;
    height: 20px;
    width: 2px;
    margin-right: 0.5rem;
    margin-top: 5px;
    background: black;
  }
`;

export const Author = styled.p`
  color: ${(props) => props.theme.colors.black};
  opacity: 0.7;

  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.black};
    opacity: 0.7;

    &:hover {
      text-decoration: underline;
    }
  }
`;

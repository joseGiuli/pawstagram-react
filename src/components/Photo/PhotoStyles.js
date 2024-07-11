import styled from "styled-components";
import visualizacaoBlack from "../../assets/visualizacao-black.svg";

export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

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

  ${(props) =>
    props.single &&
    `
    position: static;
    transform: none;
    left: auto;
    top: auto;
    grid-template-columns: 1fr;
    max-width: 600px;
    height: auto;
    overflow-y: auto;
    height: max-content;
    box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.15);
  `}

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

  ${(props) =>
    props.single &&
    `
      grid-row: 1;
      max-width: 600px;
  
   
  `}
`;

export const ImageDetails = styled.div`
  padding: 1.25rem;
  overflow-y: auto;
  word-break: break-all;
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

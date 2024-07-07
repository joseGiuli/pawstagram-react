import styled from "styled-components";
import { ReactComponent as VisualizacaoAsset } from "../../assets/visualizacao.svg";

export const ListItem = styled.li`
  position: relative;
  display: grid;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media (max-width: 640px) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  div {
    grid-area: 1/1;
  }

  span {
    grid-area: 1/1;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 16px;
    display: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 12;
  }

  &:hover span {
    display: flex;
  }
`;

export const VisualizacaoSVG = styled(VisualizacaoAsset)`
  width: max-content;
  height: max-content;
`;

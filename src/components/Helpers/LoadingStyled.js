import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const LoadingItem = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const AnimationSVG = styled.svg`
  .hidden {
    display: none;
  }

  .show {
    display: block;
  }
`;

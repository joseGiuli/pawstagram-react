import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem;
  }
`;

import styled from "styled-components";
import { ReactComponent as FooterAsset } from "../../assets/dogs-footer.svg";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

export const FooterSVG = styled(FooterAsset)`
  width: max-content;
  height: max-content;
`;

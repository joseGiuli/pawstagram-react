import styled from "styled-components";
import Paragraph from "../../ui/typography/Paragraph";

export const GraphWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 1.25rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    margin-bottom: 1.25rem;
  }
`;

export const GraphContent = styled.div``;

export const GraphItem = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  display: grid;
  align-items: center;

  &:first-child {
    grid-column: 1/3;

    ${Paragraph} {
      padding: 2rem;
      font-size: 2.5rem;
    }

    @media (max-width: 40rem) {
      grid-column: 1;
    }
  }
`;

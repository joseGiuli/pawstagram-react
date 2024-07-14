import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "300")};
  font-size: ${(props) => (props.size ? props.size : "1.25rem")};
`;

export default Paragraph;

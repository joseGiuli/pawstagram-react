import styled from "styled-components";

const Title = styled.h2`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "700")};
  font-size: ${(props) => (props.size ? props.size : "2.25rem")};
`;

export default Title;

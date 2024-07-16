import React from "react";
import styled from "styled-components";
import { FooterSVG, FooterWrapper } from "./FooterStyles";
import Paragraph from "../../ui/typography/Paragraph";

const Footer = () => {
  let linkedin = "https://github.com/joseGiuli";

  return (
    <FooterWrapper>
      <FooterSVG />
      <a href={linkedin} target="_blank">
        <Paragraph color="preto">@JoseDeGiuli</Paragraph>
      </a>
    </FooterWrapper>
  );
};

export default Footer;

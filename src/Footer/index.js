import React from "react";
import styled from "styled-components";
import Stories from "./Stories";
import Links from "./Links";
import Separator from "../common/Separator";

const Wrapper = styled.footer`
  margin-top: 1rem;
  background-color: #0d0d0d;
`;

const FooterSeparator = Separator.extend`
  opacity: 0.16;
  background-color: #ffffff;
`;

function Footer() {
  return (
    <Wrapper>
      <Stories />
      <FooterSeparator />
      <Links />
    </Wrapper>
  );
}

export default Footer;

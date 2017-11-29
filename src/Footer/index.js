import React from "react";
import styled from "styled-components";
import Stories from "./Stories";

const Wrapper = styled.footer`
  margin-top: 1rem;
`;

function Footer() {
  return (
    <Wrapper>
      <Stories />
    </Wrapper>
  );
}

export default Footer;

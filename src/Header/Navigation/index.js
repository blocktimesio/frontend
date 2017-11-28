import React, { Component } from "react";
import styled, { css } from "styled-components";

const Navigation = styled.nav`
  display: flex;
`;

const Link = styled.a`
  display: block;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  font-size: 13px;
  text-decoration: none;
  color: #a0a0a0;
`;

const Title = styled.span`
  padding-bottom: 2px;

  ${props =>
    props.selected &&
    css`
      color: #fff;
      border-bottom: 1px solid #ffffff;
    `};
`;

export default function(props) {
  return (
    <Navigation>
      <Link href="#recent">
        <Title selected={true}>Recent</Title>
      </Link>
      <Link href="#top">
        <Title selected={false}>Top</Title>
      </Link>
      <Link href="#stories">
        <Title selected={false}>Stories</Title>
      </Link>
    </Navigation>
  );
}

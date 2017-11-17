import React, { Component } from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

const Link = styled.a`
  display: block;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  line-height: 3.5rem;
  text-decoration: none;
  color: #fff;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
`;

export default function() {
  return (
    <Navigation>
      <Link href="#">Feed</Link>
      <Link href="#">Stories</Link>
    </Navigation>
  );
}

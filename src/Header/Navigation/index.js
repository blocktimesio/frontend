import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Route, Link } from "react-router-dom";

const Navigation = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
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

const NavigationLink = ({ label, to }) => (
  <Route
    path={to}
    children={({ match }) => (
      <StyledLink to={to}>
        <Title selected={match ? match.isExact : false}>{label}</Title>
      </StyledLink>
    )}
  />
);

export default function(props) {
  return (
    <Navigation>
      <NavigationLink to="/" label="Recent" />
      <NavigationLink to="/top" label="Top" />
      <NavigationLink to="/stories" label="Stories" />
    </Navigation>
  );
}

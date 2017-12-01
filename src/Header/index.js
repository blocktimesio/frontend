import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import login from "../assets/log-in.svg";
import Navigation from "./Navigation";

const Header = styled.header`
  background-color: #0d0d0d;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  // font-weight: 500;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  line-height: 3rem;
  color: #ffffff;

  @media only screen and (min-width: 62rem) {
    padding: 0;
  }
`;

const Logo = styled(Link)`
  display: flex;

  height: 100%;
`;

const Login = styled(Link)`
  font-size: 13px;

  color: #a0a0a0;
  text-decoration: none;
`;

const RightWrapper = styled.div``;

export default function() {
  return (
    <Header>
      <div className="container">
        <Content>
          <Logo to="/">
            <img alt="Blocktimes" src={logo} />
          </Logo>
          <Navigation />
          <Login to="/profile">Profile</Login>
        </Content>
      </div>
    </Header>
  );
}

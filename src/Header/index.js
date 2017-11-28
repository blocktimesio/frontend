import React from "react";
import styled from "styled-components";

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

  height: 3rem;

  // font-weight: 500;
  line-height: 3rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  color: #ffffff;
`;

const Logo = styled.a`
  display: flex;

  height: 100%;
  padding-left: 1rem;
  // padding-right: 1rem;
`;

const Login = styled.a`
  padding-right: 1rem;

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
          <Logo href="#">
            <img alt="Blocktimes" src={logo} />
          </Logo>
          <Navigation />
          <Login href="#profile">Profile</Login>
        </Content>
      </div>
    </Header>
  );
}

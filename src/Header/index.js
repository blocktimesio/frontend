import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import login from "../assets/log-in.svg";
import Navigation from "./Navigation";

const Header = styled.header`
  background-color: #232323;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  height: 3.5rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  color: #ffffff;
`;

const Logo = styled.a`
  display: flex;

  height: 100%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

const Login = styled.a`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 3.5rem;
`;

const RightWrapper = styled.div`
  display: flex;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Content>
          <Logo href="#">
            <img alt="Blocktimes" src={logo} />
          </Logo>
          <RightWrapper>
            <Navigation />
            <Login href="#">
              <img alt="Login" src={login} />
            </Login>
          </RightWrapper>
        </Content>
      </div>
    </Header>
  );
}

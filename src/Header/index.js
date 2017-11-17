import React from "react";
import logo from "../assets/logo.svg";
import login from "../assets/log-in.svg";
import styled from "styled-components";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  background-color: #232323;
`;

const Header = styled.header`
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
    <Wrapper>
      <div class="container">
        <Header>
          <Logo href="#">
            <img alt="Blocktimes" src={logo} />
          </Logo>
          <RightWrapper>
            <Navigation />
            <Login href="#">
              <img alt="Login" src={login} />
            </Login>
          </RightWrapper>
        </Header>
      </div>
    </Wrapper>
  );
}

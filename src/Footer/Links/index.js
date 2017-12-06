import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import fbIcon from "../../assets/facebook-footer.svg";
import twitterIcon from "../../assets/twitter-footer.svg";

const Wrapper = styled.section`
  background-color: #0d0d0d;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2rem;

  color: #ffffff;

  @media only screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

const PagesWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  flex-basis: 100%;
  max-width: 100%;

  @media only screen and (min-width: 62rem) {
    flex-basis: auto;
  }
`;

const StyledLink = styled(Link)`
  flex-basis: 50%;
  padding-bottom: 1rem;
  max-width: 50%;

  font-size: 13px;
  line-height: 15px;
  color: #a0a0a0;
  text-decoration: none;

  @media only screen and (min-width: 62rem) {
    margin-right: 1.5rem;

    flex-basis: auto;
    padding-bottom: 0rem;
    max-width: 100%;
  }
`;

const SocialWrapper = styled.div`
  margin-top: 0.5rem;

  @media only screen and (min-width: 62rem) {
    margin-top: 0rem;
  }
`;

const SocialLink = styled.a`
  margin-right: 1.5rem;
  text-decoration: none;
`;

function Links() {
  return (
    <Wrapper>
      <div className="container">
        <Content>
          <PagesWrapper>
            <StyledLink to="/about">About Blocktimes</StyledLink>
            <StyledLink to="/ads">Advertisments</StyledLink>
            <StyledLink to="/faq">FAQ</StyledLink>
            <StyledLink to="/privacy">Privaсy Policy</StyledLink>
          </PagesWrapper>
          <SocialWrapper>
            <SocialLink href="#">
              <img src={twitterIcon} />
            </SocialLink>
            <SocialLink href="#">
              <img src={fbIcon} />
            </SocialLink>
          </SocialWrapper>
        </Content>
      </div>
    </Wrapper>
  );
}

export default Links;

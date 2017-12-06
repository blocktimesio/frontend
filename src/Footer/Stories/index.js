import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Article from "./Article";

const Wrapper = styled.div`
  background-color: #0d0d0d;
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2.25rem;

  color: #ffffff;

  @media only screen and (min-width: 62rem) {
    padding-top: 2.5rem;
    padding-left: 0rem;
    padding-right: 0rem;
    padding-bottom: 2.5rem;
  }
`;

const Header = styled.div`
  margin: 0;
  padding: 0;
`;

const HeaderLink = styled(Link)`
  display: inline-block;

  text-decoration: none;
  color: white;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.75rem;
`;

const HeaderDescription = styled.span`
  display: block;
  font-size: 13px;
  line-height: 15px;

  color: #a0a0a0;
`;

const Articles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 2rem;
  padding: 0;

  @media only screen and (min-width: 62rem) {
    margin-top: 0;
  }

  & > article:last-child {
    margin-bottom: 0;
  }
`;

function Stories() {
  return (
    <Wrapper>
      <div className="container">
        <Content>
          <Header className="col-xs-12 col-lg-3">
            <HeaderLink to="/stories">
              <HeaderTitle>Stories</HeaderTitle>
              <HeaderDescription>To all stories</HeaderDescription>
            </HeaderLink>
          </Header>
          <Articles className="col-xs-12 col-lg-9">
            <Article
              title="Bitcoin Price Falls After Reaching Record High Over The Weekend"
              info="14:21 · 2.5K views · 144 comments"
            />
            <Article
              title="Bitcoin Price Falls After Reaching Record High Over The Weekend"
              info="14:21 · 2.5K views · 144 comments"
            />
            <Article
              title="Bitcoin Price Falls After Reaching Record High Over The Weekend"
              info="14:21 · 2.5K views · 144 comments"
            />
          </Articles>
        </Content>
      </div>
    </Wrapper>
  );
}

export default Stories;

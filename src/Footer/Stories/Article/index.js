import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;

  text-decoration: none;
  color: #ffffff;

  @media only screen and (min-width: 62rem) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ArticleWrapper = styled.article`
  margin-bottom: 2rem;
  padding: 0rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 0rem;
  }
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 0.5rem;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const Info = styled.p`
  margin: 0;

  font-size: 13px;
  line-height: 15px;
  color: #a0a0a0;
`;

function Article(props) {
  return (
    <ArticleWrapper className="col-xs-12 col-lg-4">
      <StyledLink to="/stories">
        <Title>{props.title}</Title>
        <Info>{props.info}</Info>
      </StyledLink>
    </ArticleWrapper>
  );
}

export default Article;

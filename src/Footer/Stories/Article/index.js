import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

const ArticleWrapper = styled.article`
  margin-bottom: 2rem;
  padding: 0;
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
    <ArticleWrapper className="col-xs-12">
      <Link href="/news">
        <Title>{props.title}</Title>
        <Info>{props.info}</Info>
      </Link>
    </ArticleWrapper>
  );
}

export default Article;

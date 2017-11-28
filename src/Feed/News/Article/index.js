import React, { Component } from "react";
import styled from "styled-components";
import Separator from "../../../common/Separator";

const Link = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding-top: 0.75rem;
  padding-bottom: 1rem;

  text-decoration: none;
  overflow-wrap: break-word;
`;

const LeftWrapper = styled.div`
  flex-basis: 12.16216216%;
  max-width: 12.16216216%;
`;

const RightWrapper = styled.div`
  flex-basis: 83.783783%;
  max-width: 83.783783%;
`;

const Date = styled.time`
  font-size: 13px;
  font-weight: 100;
  line-height: 15px;
  color: #afafaf;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #232323;
`;

const Info = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8125rem;
  line-height: 1.38;
  color: #afafaf;
`;

const Tags = styled.p`
  margin: 0;
  margin-top: 0.625rem;
  padding: 0;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #ff6060;
`;

const ArticleSeparator = Separator.extend`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`;

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Link href="#">
          <LeftWrapper>
            <Date>{this.props.date}</Date>
          </LeftWrapper>
          <RightWrapper>
            <Title>{this.props.title}</Title>
            <Info>{this.props.info}</Info>
            <Tags>{this.props.tags}</Tags>
          </RightWrapper>
        </Link>
        <ArticleSeparator />
      </article>
    );
  }
}

export default Article;

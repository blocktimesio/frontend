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

  @media only screen and (min-width: 62rem) {
    flex-basis: 5.912052%;
    max-width: 5.912052%;
  }
`;

const RightWrapper = styled.div`
  flex-basis: 83.783783%;
  max-width: 83.783783%;

  @media only screen and (min-width: 62rem) {
    flex-basis: 91.776315%;
    max-width: 91.776315%;
  }
`;

const Date = styled.time`
  font-size: 13px;
  font-weight: 100;
  line-height: 15px;
  color: #767676;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #0d0d0d;
`;

const Tags = styled.span`
  padding-left: 0.5rem;

  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.4px;

  color: #ff6060;
`;

const Info = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8125rem;
  line-height: 1.38rem;
  color: #767676;
`;

const ArticleSeparator = Separator.extend`
  margin-left: -1rem;
  margin-right: -1rem;

  @media only screen and (min-width: 62rem) {
    margin-left: 0rem;
    margin-right: 0rem;
  }
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
            <Title>
              {this.props.title}
              <Tags>{this.props.tags}</Tags>
            </Title>
            <Info>{this.props.info}</Info>
          </RightWrapper>
        </Link>
        <ArticleSeparator />
      </article>
    );
  }
}

export default Article;

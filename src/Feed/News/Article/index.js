import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding-top: 0.75rem;
  padding-bottom: 1rem;

  overflow-wrap: break-word;
`;

const Separator = styled.hr`
  margin: 0;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  padding: 0;
  height: 1px;

  background-color: #ebebeb;
  border: none;
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
`;

const TitleLink = styled.a`
  text-decoration: none;
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

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Wrapper>
          <LeftWrapper>
            <Date>{this.props.date}</Date>
          </LeftWrapper>
          <RightWrapper>
            <Title>
              <TitleLink href="#">{this.props.title}</TitleLink>
            </Title>
            <Info>{this.props.info}</Info>
            <Tags>{this.props.tags}</Tags>
          </RightWrapper>
        </Wrapper>
        <Separator />
      </article>
    );
  }
}

export default Article;

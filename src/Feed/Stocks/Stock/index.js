import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.h4`
  display: inline-block;
  padding: 0;
  margin: 0;

  font-size: 13px;
  font-weight: normal;
  line-height: 15px;
  color: #767676;
`;

const Delta = styled.span`
  margin-left: 0.25rem;

  font-size: 13px;
  font-weight: normal;
  line-height: 15px;

  color: #28bc00;
`;

const TopWrapper = styled.div`
  display: flex;
  padding-bottom: 0.25rem;
`;

const Price = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #0d0d0d;
`;

class Stock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <Title>{this.props.title}</Title>
          <Delta>{this.props.delta}</Delta>
        </TopWrapper>
        <Price>{this.props.price}</Price>
      </Wrapper>
    );
  }
}

export default Stock;

import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  padding: 1rem;
`;

const Button = styled.button`
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 17px;
  padding-bottom: 22px;
  height: 3.5rem;
  width: 100%;

  font-size: 15px;
  font-weight: 500;
  line-height: 17px;
  color: #ff6060;

  border: 1px solid #ff6060;
  background-color: transparent;

  cursor: pointer;
`;

class LoadButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Button type="button">Show more</Button>
      </Wrapper>
    );
  }
}

export default LoadButton;

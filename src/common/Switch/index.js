import React, { Component } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 1.875rem;
  height: 1.25rem;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #232323;
  border-radius: 10px;
  opacity: 0.2;

  :before {
    position: absolute;
    content: "";
    left: 3px;
    top: 3px;
    width: 0.875rem;
    height: 0.875rem;
    background: #fff;
    border-radius: 100%;
  }

  ${props =>
    props.checked &&
    css`
      background-color: #ff6060;
      opacity: 1;

      :before {
        -webkit-transform: translateX(10px);
        -ms-transform: translateX(10px);
        transform: translateX(10px);
      }
    `};
`;

const Checkbox = styled.input`
  display: none;

  &:checked + ${Slider} {
  }

  &:checked + ${Slider}:before {
  }
`;

class Switch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Slider checked={this.props.checked} />
      </Wrapper>
    );
  }
}

export default Switch;

import React, { Component } from "react";
import styled from "styled-components";
import loadMoreIcon from "../../assets/load-more-icon.svg";

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  border: none;
  background-color: transparent;
`;

const Image = styled.img`
  width: 1rem;
  height: 1rem;
`;

class LoadButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button type="button">
        <Image src={loadMoreIcon} />
      </Button>
    );
  }
}

export default LoadButton;

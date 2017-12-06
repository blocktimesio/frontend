import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: none;
  flex-direction: column;

  @media only screen and (min-width: 62rem) {
    display: flex;
  }
`;

const Ad = styled.div`
  margin-bottom: 1rem;
  width: 300px;
  height: 350px;

  background-color: #d8d8d8;
`;

function AdSection() {
  return (
    <Wrapper>
      <Ad />
    </Wrapper>
  );
}

export default AdSection;

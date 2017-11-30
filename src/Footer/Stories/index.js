import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #0d0d0d;
`;

const Content = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2rem;

  color: #ffffff;
`;

function Stories() {
  return (
    <Wrapper>
      <div className="container">
        <Content />
      </div>
    </Wrapper>
  );
}

export default Stories;

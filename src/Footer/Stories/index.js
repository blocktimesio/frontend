import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #0d0d0d;
`;

const Content = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 2.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 2.5rem;

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

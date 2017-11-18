import React from "react";
import styled from "styled-components";
import Article from "./Article";

const Container = styled.section`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

function News() {
  return (
    <Container>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </Container>
  );
}

export default News;

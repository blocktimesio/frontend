import React from "react";
import styled from "styled-components";
import Stocks from "./Stocks";
import News from "./News";

const Wrapper = styled.section`
  padding: 0;
`;

function Feed() {
  return (
    <Wrapper className="col-xs-12 col-lg-8">
      <Stocks />
      <News />
    </Wrapper>
  );
}

export default Feed;

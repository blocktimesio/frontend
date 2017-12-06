import React from "react";
import styled from "styled-components";

import Stocks from "./Stocks";
import News from "./News";
import AdSection from "../common/AdSection";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 0;

  @media only screen and (min-width: 62rem) {
    margin-top: 0.25rem;
  }
`;

const FeedContainer = styled.section`
  padding: 0;
`;

const AdContainer = styled.div`
  margin-top: 0.75rem;
`;

function Feed() {
  return (
    <Wrapper className="col-xs-12">
      <FeedContainer className="col-xs-12 col-lg-8">
        <News />
      </FeedContainer>
      <AdContainer>
        <AdSection />
      </AdContainer>
    </Wrapper>
  );
}

export default Feed;

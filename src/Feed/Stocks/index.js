import React from "react";
import styled from "styled-components";
import Stock from "./Stock";

const Wrapper = styled.div`
  background-color: #f8f8f8;
`;

const Content = styled.section`
  display: flex;
  overflow-x: scroll;

  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media only screen and (min-width: 62rem) {
    & > div:first-child {
      padding-left: 0;
    }
  }
`;

function Stocks() {
  return (
    <Wrapper>
      <div className="container">
        <Content>
          <Stock title="BTC" delta="+433.21" price="$9,922.66" />
          <Stock title="XRP" delta="+21.21" price="$54.11" />
          <Stock title="ETH" delta="-1.34" price="$451.26" />
          <Stock title="ETH" delta="-1.34" price="$451.26" />
          <Stock title="ETH" delta="-1.34" price="$451.26" />
        </Content>
      </div>
    </Wrapper>
  );
}

export default Stocks;

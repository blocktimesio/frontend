import React from "react";
import styled from "styled-components";
import Stock from "./Stock";

const Container = styled.section`
  display: flex;
  overflow-x: scroll;

  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: #f8f8f8;
`;

function Stocks() {
  return (
    <Container>
      <Stock title="BTC" delta="+433.21" price="$9,922.66" />
      <Stock title="XRP" delta="+21.21" price="$54.11" />
      <Stock title="ETH" delta="-1.34" price="$451.26" />
      <Stock title="ETH" delta="-1.34" price="$451.26" />
      <Stock title="ETH" delta="-1.34" price="$451.26" />
    </Container>
  );
}

export default Stocks;

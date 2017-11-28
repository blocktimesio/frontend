import React from "react";
import styled from "styled-components";
import Stocks from "./Stocks";
import News from "./News";

function Feed() {
  return (
    <section>
      <Stocks />
      <News />
    </section>
  );
}

export default Feed;

import React from "react";
import styled from "styled-components";
import Article from "./Article";
import LoadButton from "../LoadButton";

const Wrapper = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 62rem) {
    padding-left: 0;
    padding-right: 0;
  }
`;

function News() {
  return (
    <Wrapper>
      <Article
        title="Online Bank Swissquote Launches Bitcoin Exchange-Traded Product"
        date="2h"
        info="     @funnycryptoguy · 26K views · 1405 comments"
        tags="GOV"
      />
      <Article
        title="Cryptocurrency Mining Sales Cool in Q3, Says Nvidia"
        date="2h"
        info="Techcrunch · 20K views · 17 comments"
        tags="XRP, GOV"
      />
      <Article
        title="US Customs and Border Protection Advisors Form Blockchain Research Effort"
        date="2h"
        info="     @funnycryptoguy · 26K views · 1405 comments"
        tags="XRP"
      />
      <Article
        title="'2x' Boost? Bitcoin Cash Closes on Record High"
        date="2h"
        info="Inc. · 2K views · 10 comments"
        tags="XRP, BTC, GOV, DEV, LSK"
      />
      <Article
        title="Bull Grip Weakens As Bitcoin Price Breaks Below $7,000"
        date="11h"
        info="Techmeme · 25K views · 99 comments"
        tags="LOL, GOV"
      />
      <Article
        title="More Charges Filed Against Trader Who Used Bitcoin to Conceal Fraud"
        date="15h"
        info="Techmeme · 52K views · 41 comment"
        tags="ETH, GOV"
      />
      <Article
        title="GE Patent Filings Hint at Blockchain Role in Aircraft Management"
        date="15h"
        info="Techmeme · 2.5K views · 144 comments"
        tags="ETH, GOV, BTC"
      />
      <Article
        title="Bitcoin Isn't 'Too Expensive,' Says BTCC Boss Bobby Lee"
        date="1d"
        info="Techmeme · 2.5K views · 144 comments"
        tags="BTC, RISE"
      />
      <LoadButton />
    </Wrapper>
  );
}

export default News;

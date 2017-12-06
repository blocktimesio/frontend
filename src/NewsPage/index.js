import React from "react";
import styled from "styled-components";
import AdSection from "../common/AdSection";

const Wrapper = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 62rem) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const Article = styled.article`
  padding: 0;

  @media only screen (min-width: 62rem) {
    padding-right: 1.25rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;

  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.33;
  color: #0d0d0d;

  @media only screen and (min-width: 62rem) {
    margin-top: 2rem;
    font-size: 2.5rem;
    line-height: 1.2;
  }
`;

const Info = styled.p`
  margin: 0;
  padding: 0;

  font-size: 13px;
  line-height: 1.38;
  color: #767676;
`;

const Tags = styled.span`
  margin-left: 1rem;

  font-size: 13px;
  font-weight: 500;
  line-height: 1.38;

  color: #ff6060;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 2rem;
  color: #0d0d0d;

  p {
    margin: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0;
  }

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

function NewsPage(props) {
  return (
    <Wrapper className="container">
      <Title>
        EU Officials Reveal €5 Million 'Blockchains for Social Good' Contest
      </Title>
      <Info>
        Inc. · 26K views · 1405 comments<Tags>XRP</Tags>
      </Info>
      <Content>
        <Article className="col-xs-12 col-lg-8">
          <Text>
            <p>
              Cupertino, California —November 2, 2017 — Apple today announced
              financial results for its fiscal 2017 fourth quarter ended
              September 30, 2017. The Company posted quarterly revenue of $52.6
              billion, an increase of 12 percent from the year-ago quarter, and
              quarterly earnings per diluted share of $2.07, up 24 percent.
              International sales accounted for 62 percent of the quarter’s
              revenue.
            </p>
            <p>
              “We’re happy to report a very strong finish to a great fiscal
              2017, with record fourth quarter revenue, year-over-year growth
              for all our product categories, and our best quarter ever for
              Services,” said Tim Cook, Apple’s CEO. “With fantastic new
              products including iPhone 8 and iPhone 8 Plus, Apple Watch Series
              3, and Apple TV 4K joining our product lineup, we’re looking
              forward to a great holiday season, and with the launch of iPhone X
              getting underway right now, we couldn’t be more excited as we
              begin to deliver our vision for the future with this stunning
              device.”
            </p>
            <p>
              “Apple’s year-over-year revenue growth rate accelerated for the
              fourth consecutive quarter and drove EPS growth of 24 percent in
              the September quarter,” said Luca Maestri, Apple’s CFO. “We also
              generated strong operating cash flow of $15.7 billion and returned
              $11 billion to investors through our capital return program.”
            </p>
          </Text>
        </Article>
        <AdSection />
      </Content>
    </Wrapper>
  );
}

export default NewsPage;

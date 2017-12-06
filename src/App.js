import React from "react";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Stocks from "./Feed/Stocks";
import Header from "./Header";
import Feed from "./Feed";
import NewsPage from "./NewsPage";
import Footer from "./Footer";

import { Lg } from "./common/Responsive";

const Main = styled.main`
  font-family: "Inter UI", Arial, sans-serif;
`;

const Content = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;

  @media only screen and (min-width: 62rem) {
    width: 61rem;
    max-width: 100%;
  }

  @media only screen and (min-width: 75rem) {
    width: 74rem;
    max-width: 100%;
  }
`;

function App() {
  return (
    <Main>
      <Helmet>
        <title>Blocktimes</title>
      </Helmet>
      <Header />
      <Route exact path="/" component={Stocks} />
      <Content>
        <div className="row">
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/news/:name" component={NewsPage} />
          </Switch>
        </div>
      </Content>
      <Route
        path="/"
        render={({ match }) =>
          match.isExact ? (
            <Lg>
              <Footer />
            </Lg>
          ) : (
            <Footer />
          )
        }
      />
    </Main>
  );
}

export default App;

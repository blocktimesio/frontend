import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Feed from "./Feed";

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
`;

function App() {
  return (
    <Main>
      <Header />
      <Content>
        <div className="row">
          <Feed />
        </div>
      </Content>
    </Main>
  );
}

export default App;

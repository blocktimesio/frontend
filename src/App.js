import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Feed from "./Feed";

const Main = styled.main`
  font-family: "Inter UI", Arial, sans-serif;
`;

function App() {
  return (
    <Main>
      <Header />
      <Feed />
    </Main>
  );
}

export default App;

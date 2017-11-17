import React from "react";
import styled from "styled-components";
import Header from "./Header";
import News from "./News";

const Main = styled.main`
  font-family: "Intel UI", Arial, sans-serif;
`;

function App() {
  return (
    <Main>
      <Header />
      <News />
    </Main>
  );
}

export default App;

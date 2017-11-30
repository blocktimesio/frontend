import React from "react";
import styled from "styled-components";

function NewsPage(props) {
  return <div>{props.match.params.name}</div>;
}

export default NewsPage;

import React, { Component } from "react";
import styled from "styled-components";

import CommentForm from "./CommentForm";
import Separator from "../../common/Separator";

const Wrapper = styled.div``;

const CommentsSeparator = styled.hr`
  padding: 0;
  height: 1px;
  background-color: #ebebeb;
  border: none;
`;

class Comments extends Component {
  render() {
    return (
      <Wrapper>
        <CommentsSeparator className="full-width" />
        <CommentForm />
      </Wrapper>
    );
  }
}

export default Comments;

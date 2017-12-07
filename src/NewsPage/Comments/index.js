import React, { Component } from "react";
import styled from "styled-components";

import CommentForm from "./CommentForm";

const Wrapper = styled.div`
  padding: 0;
`;

class Comments extends Component {
  render() {
    return (
      <Wrapper className="col-xs-12 col-lg-10">
        <CommentForm />
      </Wrapper>
    );
  }
}

export default Comments;

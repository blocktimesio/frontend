import React, { Component } from "react";
import styled from "styled-components";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const CommentsWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 1rem;
  }
`;

class Comments extends Component {
  render() {
    return (
      <Wrapper className="col-xs-12 col-lg-10">
        <CommentForm />
        <CommentsWrapper>
          <Comment
            root={true}
            topMargin={false}
            name="Mr Sadman"
            time="3h"
            likesCount={24}
          />
          <Comment
            root={false}
            topMargin={false}
            name="Mr Sadman"
            time="3h"
            likesCount={24}
          />
          <Comment
            root={false}
            topMargin={false}
            name="Mr Sadman"
            time="3h"
            likesCount={24}
          />
          <Comment
            root={true}
            topMargin={true}
            name="Mr Sadman"
            time="3h"
            likesCount={24}
          />
          <Comment
            root={false}
            topMargin={false}
            name="Mr Sadman"
            time="3h"
            likesCount={24}
          />
          <Comment
            root={false}
            topMargin={false}
            name="Mr Sadman"
            time="3h"
            likesCount={24}
          />
        </CommentsWrapper>
      </Wrapper>
    );
  }
}

export default Comments;

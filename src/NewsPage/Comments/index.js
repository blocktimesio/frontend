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
  constructor(props) {
    super(props);

    this.state = { comments: [] };

    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    const comments = [
      {
        text:
          "As designers and researchers, it’s our job to know our community and its needs.",
        name: "Mr Sadman",
        time: "3h",
        likesCount: 24,
        liked: false,
        root: true,
        topMargin: false
      },
      {
        text:
          "As designers and researchers, it’s our job to know our community and its needs.",
        name: "Mr Sadman",
        time: "3h",
        likesCount: 24,
        liked: false,
        root: false,
        topMargin: false
      },
      {
        text:
          "As designers and researchers, it’s our job to know our community and its needs.",
        name: "Mr Sadman",
        time: "3h",
        likesCount: 24,
        liked: false,
        root: false,
        topMargin: false
      },
      {
        text:
          "As designers and researchers, it’s our job to know our community and its needs.",
        name: "Mr Sadman",
        time: "3h",
        likesCount: 0,
        liked: false,
        root: true,
        topMargin: true
      },
      {
        text:
          "As designers and researchers, it’s our job to know our community and its needs.",
        name: "Mr Sadman",
        time: "3h",
        likesCount: 0,
        liked: false,
        root: false,
        topMargin: false
      },
      {
        text:
          "As designers and researchers, it’s our job to know our community and its needs.",
        name: "Mr Sadman",
        time: "3h",
        likesCount: 0,
        liked: false,
        root: false
      }
    ];

    this.setState({ comments: comments });
  }

  handleSend(text) {
    const comments = this.state.comments.slice();

    const newComments = [
      {
        text: text,
        name: "Mr Sadman",
        time: "now",
        likesCount: 0,
        liked: false,
        root: true
      }
    ];

    this.setState({ comments: newComments.concat(comments) });
  }

  render() {
    const commentsList = this.state.comments.map((comment, index) => {
      return (
        <Comment
          text={comment.text}
          name={comment.name}
          time={comment.time}
          root={comment.root}
          topMargin={index != 0 && comment.root}
          likesCount={comment.likesCount}
          liked={comment.liked}
        />
      );
    });

    return (
      <Wrapper className="col-xs-12 col-lg-10">
        <CommentForm onSend={text => this.handleSend(text)} />
        <CommentsWrapper>{commentsList}</CommentsWrapper>
      </Wrapper>
    );
  }
}

export default Comments;

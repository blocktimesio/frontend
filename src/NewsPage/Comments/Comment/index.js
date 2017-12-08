import React, { Component } from "react";
import styled from "styled-components";

import Separator from "../../../common/Separator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${props => (props.topMargin ? "2.5rem" : "1rem")};
  padding-left: ${props => (props.root ? "0rem" : "1.5rem")};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h4`
  display: inline-block;
  margin: 0;
  margin-left: 0.75rem;
  margin-right: 0.5rem;

  font-size: 15px;
  line-height: 17px;
  font-weight: 500;
  color: #0d0d0d;
`;

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;

  width: 2rem;
  height: 2rem;
`;

const AvatarPlaceholder = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;

  background-color: #d8d8d8;
  border-radius: 1rem;
`;

const Avatar = styled.img`
  position: absolute;
  left: 0;
  right: 0;

  display: inline-block;
  height: 100%;
  width: 100%;

  border: none;
`;

const Time = styled.time`
  font-size: 15px;
  line-height: 17px;
  color: #767676;
`;

const Content = styled.div`
  display: flex;

  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  margin: 0;

  font-size: 0.9375rem;
  line-height: 1.53;

  color: #0d0d0d;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 62rem) {
    margin-top: 0.25rem;
  }
`;

const FooterLeftWrapper = styled.div``;

const ReplyButton = styled.button`
  padding: 0;

  font-size: 0.9375rem;
  line-height: 1.0625rem;
  color: #767676;

  background-color: transparent;
  border: none;
`;

const FooterRightWrapper = styled.div``;

const LikeButton = styled.button`
  padding: 0;

  margin-right: 0.75rem;

  font-size: 0.9375rem;
  line-height: 1.0625rem;
  color: #767676;

  background-color: transparent;
  border: none;
`;

const Likes = styled.a`
  font-size: 0.9375rem;
  line-height: 1.0625rem;
  color: #ff6060;
  text-decoration: none;
`;

const StyledSeparator = Separator.extend`
  margin-top: 1rem;
`;

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const count = this.props.likesCount;
    const likesString = count + " " + (count == 1 ? "like" : "likes");

    return (
      <Wrapper root={this.props.root} topMargin={this.props.topMargin}>
        <Header>
          <AvatarWrapper>
            <AvatarPlaceholder />
            <Avatar src="" alt="" />
          </AvatarWrapper>
          <Name>{this.props.name}</Name>
          <Time>{this.props.time}</Time>
        </Header>
        <Content>
          <Text>
            As designers and researchers, it’s our job to know our community and
            its needs.
          </Text>
        </Content>
        <Footer>
          <FooterLeftWrapper>
            <ReplyButton type="button" name="reply_button">
              Reply
            </ReplyButton>
          </FooterLeftWrapper>
          <FooterRightWrapper>
            <LikeButton type="button" name="like_button">
              Like
            </LikeButton>
            <Likes href="#">{likesString}</Likes>
          </FooterRightWrapper>
        </Footer>
        <StyledSeparator />
      </Wrapper>
    );
  }
}

export default Comment;

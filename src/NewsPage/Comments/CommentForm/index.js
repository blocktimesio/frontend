import React, { Component } from "react";
import styled from "styled-components";

import ContentEditable from "./ContentEditable";

const Form = styled.form`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const TextWrapper = styled.div`
  position: relative;
  margin: 0;
  margin-bottom: 1rem;

  :before {
    position: absolute;
    top: 21.5px;
    left: 1.5rem;
    content: ${props =>
      props.showPlaceholder ? "attr(data-placeholder)" : "none"};
    pointer-events: none;

    font-size: 15px;
    line-height: 1.53;
    color: #767676;
  }

  :focus {
    :before {
      content: none;
    }
  }

  border: 1px solid #ebebeb;
  cursor: text;
`;

const Textarea = styled(ContentEditable)`
  overflow: hidden;

  padding-top: 21px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 23px;

  tab-size: 4;
  white-space: pre-wrap;
  word-wrap: break-word;

  font-size: 15px;
  line-height: 1.53;
  color: #0d0d0d;

  outline: none;
`;

const Buttons = styled.div`
  display: flex;
`;

const ReplyButton = styled.button`
  margin: 0;
  margin-right: 1rem;

  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;

  font-size: 15px;
  line-height: 17px;

  color: #ffffff;
  background-color: #ff6060;
  border: none;
  border-radius: 0;
`;

const CancelButton = styled.button`
  padding: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  font-size: 15px;
  line-height: 17px;
  color: #767676;
  background-color: transparent;
  border: none;
`;

class CommentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { html: "" };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel(event) {
    this.setState({ html: "" });
  }

  handleChange(event) {
    this.setState({ html: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSend(this.state.html);
    this.setState({ html: "" });
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextWrapper
          showPlaceholder={this.state.html.length == 0}
          data-placeholder="Write a response..."
        >
          <Textarea
            ref={e => (this.textInput = e)}
            html={this.state.html}
            disabled={false}
            onChange={this.handleChange}
          />
        </TextWrapper>
        <Buttons>
          <ReplyButton type="submit" name="submit_button">
            Reply
          </ReplyButton>
          <CancelButton
            type="button"
            name="cancel_button"
            onClick={this.handleCancel}
          >
            Cancel
          </CancelButton>
        </Buttons>
      </Form>
    );
  }
}

export default CommentsForm;

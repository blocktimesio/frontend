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

  :before {
    position: absolute;
    top: 21.5px;
    left: 1.5rem;
    content: ${props =>
      props.htmlMy.length == 0 ? "attr(data-placeholder)" : "none"};
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

class CommentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { html: "" };

    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWrapperClick(event) {
    // this.textInput.focus();

    console.log(this.textInput);
    // ReactDOM.findDOMNode(this.refs.textInput).focus();
  }

  handleChange(event) {
    this.setState({ html: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextWrapper
          htmlMy={this.state.html}
          data-placeholder="Write a response..."
        >
          <Textarea
            ref={div => {
              this.textInput = div;
            }}
            html={this.state.html}
            disabled={false}
            onChange={this.handleChange}
          />
        </TextWrapper>
        <button type="submit" name="submit_button" />
      </Form>
    );
  }
}

export default CommentsForm;

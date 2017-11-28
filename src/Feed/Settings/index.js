import React, { Component } from "react";
import styled from "styled-components";
import Switch from "../../common/Switch";
import Separator from "../../common/Separator";

const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Order = styled.div`
  display: flex;
  justify-content: center;

  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  font-size: 15px;
  line-height: 1.38rem;
  color: #afafaf;
  background: none;
`;

const OrderButton = styled.button`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: transparent;
  border: none;
`;

const OrderText = styled.span`
  margin-right: 0.5rem;
`;

const Theme = styled.div`
  display: flex;
  justify-content: center;
  align-items: middle;

  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.75rem;
`;

const ThemeDot = styled.span`
  position: relative;
  top: 6.5px;
  margin-right: 0.5rem;
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: #ff6060;
`;

const ThemeText = styled.span`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38rem;
  color: #232323;
`;

const SettingsSeparator = Separator.extend`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

class OrderFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState, prevProps) => ({
      checked: !prevState.checked
    }));
  }

  render() {
    return (
      <OrderButton type="button" onClick={this.toggle}>
        <Order>
          <OrderText>Show in order</OrderText>
          <Switch checked={this.state.checked} />
        </Order>
      </OrderButton>
    );
  }
}

export default function() {
  return (
    <Settings>
      <div className="col-xs-12">
        <OrderFilter />
        <SettingsSeparator />
      </div>
      <div className="col-xs-12">
        <Theme>
          <ThemeDot />
          <ThemeText>Bitcoin is edgy and stable, they said…</ThemeText>
        </Theme>
        <SettingsSeparator />
      </div>
      <div className="col-md-4" />
    </Settings>
  );
}

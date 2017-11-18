import React from "react";
import styled from "styled-components";
import Switch from "../../common/Switch";

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
  line-height: 1.38;
  color: #afafaf;
  border-bottom: 1px solid #ebebeb;
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

  border-bottom: 1px solid #ebebeb;
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
  line-height: 1.38;
  color: #232323;
`;

export default function() {
  return (
    <Settings>
      <div className="col-xs-12 col-md-4">
        <Order>
          <OrderText>Show in order</OrderText>
          <Switch />
        </Order>
      </div>
      <div className="col-xs-12 col-md-4">
        <Theme>
          <ThemeDot />
          <ThemeText>Bitcoin is edgy and unstable, they said…</ThemeText>
        </Theme>
      </div>
      <div className="col-md-4" />
    </Settings>
  );
}

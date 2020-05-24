import React from "react";
import styled, { css } from "styled-components";
import Colors from "../particles/Colors";

const HourWrapper = styled.span`
  color: ${ Colors.text_secondary };
  margin: 0 5px 0 0;
`;

const Hour = ({ children }) => {
  return <HourWrapper>{ children }</HourWrapper>;
};

export default Hour;

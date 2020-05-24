import React from "react";
import Colors from "../particles/Colors";
import styled from "styled-components";

const HourWrapper = styled.span`
  color: ${Colors.text_secondary};
  margin: 0 5px 0 0;
`;

const Hour = ({ children }) => {
  return <HourWrapper>{children}</HourWrapper>;
};

Hour.propTypes = {};

Hour.defaultProps = {};

export default Hour;

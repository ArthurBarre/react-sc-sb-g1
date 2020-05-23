import React from "react";
import Colors from "../particles/Colors";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const displays = {
  true: "inline",
  false: "none",
}

const HourWrapper = styled.span` 
  display ${props => (props.display === displays.true ? displays.true : displays.false)};
  color: ${Colors.text_secondary};
  margin: 0 5px 0 0;
`;

const Hour = ({ display }) => {
  return (
  <HourWrapper display={display}>
    10:32
  </HourWrapper>
  );
};

Hour.propTypes = {
  display: PropTypes.bool,
};

Hour.defaultProps = {
  // display: displays.true, 
};

export default Hour;
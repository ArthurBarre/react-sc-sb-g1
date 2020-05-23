import React from "react";
import Colors from "../particles/Colors";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// const isDisplayed = {
//   true: "inline",
//   false: "none",
// }

const HighlightMessageWrapper = styled.span` 
  // display ${props => (props.display === isDisplayed.true ? isDisplayed.true : isDisplayed.false)};
  // color: ${Colors.text_secondary};
  // margin: 0 5px 0 0;
`;

const HighlightMessage = ({ display }) => {
  return (
  <HighlightMessageWrapper display={display}>
    10:32
  </HighlightMessageWrapper>
  );
};

HighlightMessage.propTypes = {
  // display: PropTypes.bool,
};

HighlightMessage.defaultProps = {
  // display: isDisplayed.true, 
};

export default HighlightMessage;
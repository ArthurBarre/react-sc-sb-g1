import React from "react";
import Colors from "../particles/Colors";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const HighlightMessageWrapper = styled.span` 
  color: ${Colors.text_secondary};
  margin: 0 5px 0 0;
`;

const HighlightMessage = () => {
  return (
  <HighlightMessageWrapper>
    10:32
  </HighlightMessageWrapper>
  );
};

HighlightMessage.propTypes = {
};

HighlightMessage.defaultProps = {
};

export default HighlightMessage;
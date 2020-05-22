import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TextWrapper = styled.div`
  color: black;
  font-size: 14px;
`;

const Example = ({ text }) => {
  return <TextWrapper>{text}</TextWrapper>;
};

Example.propTypes = {
  text: PropTypes.string,
};

Example.defaultProps = {
  text: "",
};

export default Example;

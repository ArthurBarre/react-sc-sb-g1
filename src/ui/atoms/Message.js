import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const MessageWrapper = styled.span`
  color: ${ Colors.text_primary };
`;

const Message = ({ message }) => {
  return <MessageWrapper>{ message }</MessageWrapper>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

Message.defaultProps = {
};

export default Message;
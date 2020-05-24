import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const MessageWrapper = styled.span`
  color: ${Colors.text_primary};
  ${({ highLight }) =>
    highLight &&
    css`
      background-color: ${Colors.brand_light};
      color: white;
      padding: 3px;
    `}
`;

const Message = ({ message, highLight }) => {
  return <MessageWrapper highLight={highLight}>{message}</MessageWrapper>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

Message.defaultProps = {};

export default Message;

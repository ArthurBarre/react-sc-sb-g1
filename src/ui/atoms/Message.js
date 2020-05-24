import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const MessageWrapper = styled.span`
  margin: 0 0 0 5px;
  color: ${ Colors.text_primary };
`;

const Message = ({ message }) => {
  return <MessageWrapper>{ message }</MessageWrapper>;
};

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: "Ceci est le contenu du message",
};

export default Message;
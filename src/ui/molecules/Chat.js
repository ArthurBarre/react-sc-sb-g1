import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

import User from "../atoms/User";
import Message from "../atoms/Message";
import Icon from "../atoms/Icon";
import Hour from "../atoms/Hour";
import Mention from "../atoms/Mention";

const ChatWrapper = styled.div`
  padding: 5px 20px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 20px;
  background-color: ${Colors.background_primary};
  ${({ highLight }) =>
    highLight &&
    css`
      border-left: 4px solid ${Colors.brand_primary};
    `}
`;

const Chat = ({
  username,
  contrast,
  color,
  message,
  hour,
  icon,
  mention,
  highLight,
}) => {
  return (
    <ChatWrapper highLight={highLight}>
      {hour && <Hour>{hour}</Hour>}
      {icon && <Icon></Icon>}
      <User username={username} contrast={contrast} color={color}></User>
      <Message highLight={highLight} message={message}></Message>
      {mention && <Mention>@{mention}</Mention>}
    </ChatWrapper>
  );
};

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hour: PropTypes.string,
  mention: PropTypes.string,
  icon: PropTypes.bool,
  contrast: PropTypes.bool,
  highLight: PropTypes.bool,
};

Chat.defaultProps = {
  username: "",
  message: "",
  hour: "",
  mention: "",
  icon: false,
  contrast: false,
  highLight: false,
};

export default Chat;

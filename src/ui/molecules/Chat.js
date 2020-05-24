import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import User, { contrasts } from "../atoms/User";
import Icon from "../atoms/Icon";
import Hour from "../atoms/Hour";
import Mention from "../atoms/Mention";

const ChatWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: auto;
  max-width: 300px;
  padding: 5px 20px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 20px;
  background-color: ${Colors.background_primary};
`;

const MessageWrapper = styled.span`
  width: auto;
  overflow-wrap: break-word;
  max-width: 250px;
  margin-left: 13px;
  color: ${Colors.text_primary};
`;

// export const borders = {
//   true: "4px solid #9146FF",
//   false: "none"
// };

// border-left ${props => (props.border === borders.true ? borders.true : borders.false)};

//  hightlight
//  padding 5px 20px 5px 16px;
//  margin 5px 0
//  text au dessus color #ADADB8
//  svg du text au dessus width/height 20px

const Chat = ({ message, username, mention, hour, icon }) => {
  return (
    <ChatWrapper>
      {hour && <Hour>{hour}</Hour>}
      {icon && <Icon></Icon>}
      <User username={username}></User>:
      <MessageWrapper>{message}</MessageWrapper>
      {mention && <Mention>@{mention}</Mention>}
    </ChatWrapper>
  );
};

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  mention: PropTypes.string,
  contrast: PropTypes.bool,
  icon: PropTypes.bool,
  hour: PropTypes.string,
};

Chat.defaultProps = {
  username: "shaticedu75",
  message: "Hello, comment ça va dans la casa ?",
  mention: "",
  contrast: contrasts.true,
};

export default Chat;

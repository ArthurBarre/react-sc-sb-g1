import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import User, { contrasts } from "../atoms/User";
import Icon from "../atoms/Icon";
import Hour from "../atoms/Hour";

// export const borders = {
//   true: "4px solid #9146FF",
//   false: "none"
// };

const ChatWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: auto;
  max-width: 300px;
  padding: 5px 20px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: ${Colors.text_primary};
  background-color: ${Colors.background_primary};
`;
const MentionWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 2px 4px;
  margin-left: 13px;
  background-color: #323239;
  text-transform: capitalize;
`;
const MessageWrapper = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  max-width: 250px;
  margin-left: 13px;
`;

// border-left ${props => (props.border === borders.true ? borders.true : borders.false)};

//  hightlight
//  padding 5px 20px 5px 16px;
//  margin 5px 0
//  text au dessus color #ADADB8
//  svg du text au dessus width/height 20px

//  mention
//  padding 2px 4px
//  background-color #323239
//  text-transform capitalize;

const Chat = ({ message, username, mention, hour, icon }) => {
  return (
    <ChatWrapper>
      {hour && <Hour>{hour}</Hour>}
      {icon && <Icon></Icon>}
      <User username={username}></User>:
      <MessageWrapper>{message}</MessageWrapper>
      {mention && <MentionWrapper>@{mention}</MentionWrapper>}
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
  username: "shatice",
  message: "Ceci est un message",
  mention: "",
  contrast: contrasts.true,
};

export default Chat;

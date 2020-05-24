import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import User, { contrasts } from "../atoms/User";
import Icon from "../atoms/Icon";
import Hour from "../atoms/Hour";
import Mention from "../atoms/Mention";
import Message from "../atoms/Message";

const ChatWrapper = styled.div`
  padding: 5px 20px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 20px;
  background-color: ${Colors.background_primary};
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

const Chat = ({ username, contrast, message, hour, icon, mention }) => {
  return (
    <ChatWrapper>
      {hour && <Hour>{ hour }</Hour>}
      {icon && <Icon></Icon>}
      <User username={ username } contrast={ contrast }></User>:
      <Message message={ message }></Message>
      {mention && <Mention>@{ mention }</Mention>}
    </ChatWrapper>
  );
};

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  hour: PropTypes.string,
  mention: PropTypes.string,
  contrast: PropTypes.bool,
};

Chat.defaultProps = {
  username: "shaticedu75222",
  message: "Hello, comment ça va dans la casa ?",
  contrast: contrasts.false,
};

export default Chat;

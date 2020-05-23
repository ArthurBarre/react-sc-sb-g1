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
  padding: 5px 20px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 20px; 
  color: ${Colors.text_primary};
  background-color: ${Colors.background_primary};  
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
  
const Example = ({ message, username, mention }) => {
  return (
    <ChatWrapper>
      <Hour></Hour>
      <Icon></Icon>
      <User username={username}></User>
      {/* {hour}
      {icon} */}
      : {message}
      {mention && `@${mention}`}
    </ChatWrapper>
  );
};

Example.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string,
  mention: PropTypes.string,
  contrast: PropTypes.bool,
  // display: PropTypes.bool,
  // hour: PropTypes.bool,
  // icon: PropTypes.node,
  // border: PropTypes.bool, 
};

Example.defaultProps = {
  username: "shatice",
  message: "Ceci est un message",
  mention: "",
  contrast: contrasts.true,
  // display: isDisplayed.true,
  // hour: false,
  // icon: null,
  // border: borders.false, 
};

export default Example;

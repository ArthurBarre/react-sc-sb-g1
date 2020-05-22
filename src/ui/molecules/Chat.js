import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ChatWrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  color: black;
  font-size: 14px;
`;

const Example = ({ message, icon, hour, username, mention }) => {
  return (
    <ChatWrapper>
      {username}|{icon}|{hour}|{message}|{mention && `@${mention}`}
    </ChatWrapper>
  );
};

Example.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.node,
  hour: PropTypes.string,
  username: PropTypes.string,
};

Example.defaultProps = {
  message: "",
  icon: null,
  hour: "",
  username: "",
};

export default Example;

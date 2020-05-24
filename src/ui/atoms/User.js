import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const colors = {
  red: "",
  blue: "",
  green: "",
  purple: "",
  yellow: "",
  orange: "",
};

export const contrasts = {
  true: "1",
  false: ".8",
};

const UserWrapper = styled.span`
  font-weight: 700;
  color ${(props) =>
    props.color === colors.purple ? Colors.brand_primary : Colors.neutral_grey};
  opacity ${(props) =>
    props.contrast === contrasts.true ? contrasts.true : contrasts.false};
  :hover{

  cursor: pointer; 
  }
`;

const User = ( { username, color, contrast } ) => {
  return (
    <UserWrapper contrast={contrast} color={color}>
      {username}
    </UserWrapper>
  );
};

User.propTypes = {
  username: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  contrast: PropTypes.bool,
};

User.defaultProps = {
  username: "jesuislepseudo",
  color: colors.purple,
  contrast: contrasts.true,
};

export default User;

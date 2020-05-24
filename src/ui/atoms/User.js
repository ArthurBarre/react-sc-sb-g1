import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const colors = {
  purple: Colors.brand_primary,
  orange: Colors.orange,
};


const UserWrapper = styled.span`
  cursor: pointer; 
  color ${(props) =>
    props.color === colors.purple ? colors.purple : colors.orange};
  font-weight: 700;
  opacity: 1;
  ${({ contrast }) =>
    contrast &&
    css`
      opacity: 0.8;
    `}

  span {
    color: ${Colors.text_primary};
  }
`;

const User = ({ username, color, contrast }) => {
  return (
    <UserWrapper contrast={contrast} color={color}>
      {username}
      <span>: </span>
    </UserWrapper>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  contrast: PropTypes.bool,
};

User.defaultProps = {
  username: "jesuislepseudo",
  color: colors.orange,
  contrast: false,
};

export default User;

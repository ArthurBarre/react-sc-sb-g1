import React from "react";
import styled, { css } from "styled-components";
import Colors from "../particles/Colors";

const Mention = styled.span`
  margin: 0 5px; 
  padding: 2px 4px;
  color: ${ Colors.text_primary };
  background-color: ${ Colors.background_secondary };
  text-transform: capitalize;
`;

// If not taged by me 
// No Padding
// No background-color

export default Mention;

import React from "react";
import styled from 'styled-components';
import {font} from "../templates/ui";

const StyledTitle = styled.h2`
  font-family: ${font.family.head};
  margin-bottom: 5px;
`;

const Title = ({children}) => (
  <StyledTitle>{children}</StyledTitle>
);

export default Title;

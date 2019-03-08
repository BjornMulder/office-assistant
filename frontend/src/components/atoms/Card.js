import React from "react";
import styled from 'styled-components';
import {color} from "../templates/ui";

const StyledCard = styled.div`
  background-color: ${color.body.base};
  padding: 15px;
  border: 1px solid #f3f3f3;
`;

const Card = ({children}) => (
  <StyledCard>{children}</StyledCard>
);

export default Card;

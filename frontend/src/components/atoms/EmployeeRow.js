import React from "react";
import styled from "styled-components";
import { color } from "../templates/ui";

const StyledEmployeeRow = styled.li`
  display: flex;
  align-items: center;
  background-color: ${color.body.base};
  margin-bottom: 15px;
  position: relative;
`;

const Name = styled.span`
  display: block;
  font-weight: 400;
`;

const EmployeeRow = ({ name }) => (
  <StyledEmployeeRow>
    <Name>{name}</Name>
  </StyledEmployeeRow>
);

export default EmployeeRow;

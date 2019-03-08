import React from "react";
import styled from "styled-components";
import {color} from "../templates/ui";

const StyledEmployee = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  line-height: 1rem;
  
  + li {
    padding-top: 20px;
  }
  
  span {
    color: #999;
    font-weight: 300;
  }
`;

const Employee = ({ key, children }) => (
  <StyledEmployee key={key}>
    {children}
  </StyledEmployee>
);

export default Employee;

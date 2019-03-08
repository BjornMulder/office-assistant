import React from "react";
import styled from "styled-components";

const StyledEmployeeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const EmployeeList = ({children}) => (
  <StyledEmployeeList>
    {children}
  </StyledEmployeeList>
);

export default EmployeeList;

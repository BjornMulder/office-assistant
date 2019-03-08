import React from "react";
import styled from "styled-components";
import EmployeeRow from "../atoms/EmployeeRow";

const StyledEmployeeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

const EmployeeList = () => (
  <StyledEmployeeList>
    <EmployeeRow name="Luca Fraser"  />
    <EmployeeRow name="Patrick Falize"  />
    <EmployeeRow name="Arjan Passchier"  />
    <EmployeeRow name="Bjorn Mulder"  />
  </StyledEmployeeList>
);

export default EmployeeList;

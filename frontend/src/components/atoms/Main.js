import React from "react";
import styled from 'styled-components';

const StyledMain = styled.div`
  margin-top: 20px;
`;

const Main = ({children}) => (
  <StyledMain>{children}</StyledMain>
);

export default Main;

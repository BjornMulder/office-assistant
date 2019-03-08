import React from "react";
import styled from 'styled-components';
import {color} from "../templates/ui";
import Logo from "../atoms/icons/Logo";

const StyledHeader = styled.header`
  display: flex;
  background-color: ${color.body.base};
  box-shadow: 0 0 10px 0 rgba(0,0,0, .15);
  padding: 10px 30px;
`;

const StyledLogo = styled(Logo)`
  height: 40px;
  width: 80px;
  
  @media only screen and (min-width: 991px) {
      width: 108px;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledLogo/>
  </StyledHeader>
);

export default Header;

import React from "react";
import styled from "styled-components";
import {color} from "../templates/ui";
import Logo from "../atoms/icons/Logo";
import Loader from "../atoms/icons/Loader";

const StyledPage = styled.div`
  background-color: ${color.body.base};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLogo = styled(Logo)`
  display: block;
  margin: 0 auto;
`;

const StyledLoader = styled(Loader)`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;

const StyledMessage = styled.p`
  color: ${color.base.base};
  text-align: center;
  padding-top: 15px;
  font-size: 1.8em;
  font-family: "Lato", sans-serif;
`;

const LoadingScreen = ({ children }) => (
  <StyledPage>
    <Container>
      <StyledLogo />
      <StyledMessage>{children}</StyledMessage>
      <StyledLoader />
    </Container>
  </StyledPage>
);

export default LoadingScreen;

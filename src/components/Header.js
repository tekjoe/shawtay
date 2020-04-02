import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import Container from "./Container";

const Header = styled.header`
  padding: 2rem 1rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

Navbar.Logo = styled.img``;

export default () => {
  return (
    <Header>
      <Container>
        <Navbar>
          <Navbar.Logo src={logo} />
        </Navbar>
      </Container>
    </Header>
  );
};

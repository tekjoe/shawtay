import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import Container from "./Container";

const Header = styled.header`
  padding: 2rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: initial;
  }
`;

const MobileNav = styled(motion.nav)`
  position: absolute;
  padding: 1.75rem;
  border-radius: 0.5rem;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  width: calc(100vw - 4rem);
  background: ${({ theme }) => theme.darkViolet};
  ul {
    list-style-type: none;
    padding-bottom: 0.75rem;
    &:first-of-type {
      border-bottom: 1px solid ${({ theme }) => theme.grayishViolet};
    }
    &:last-of-type {
      padding-top: 0.75rem;
    }
    li {
      padding: 0.75rem 0;
    }
  }
`;

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

DesktopNav.Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  margin-left: 2rem;
  li {
    margin-right: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.grayishViolet};
  }
`;

DesktopNav.Authentication = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.grayishViolet};
  }
`;

const Button = styled.a`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  width: 100%;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
`;

Navbar.Logo = styled.img`
  object-fit: contain;
`;
Navbar.Menu = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };
  const variants = {
    open: { display: "block", opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: "none" } }
  };
  return (
    <Header>
      <Container>
        <Navbar>
          <Navbar.Logo src={logo} />
          <Navbar.Menu src={menu} onClick={toggleMenu} />
          <DesktopNav>
            <DesktopNav.Navigation>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </DesktopNav.Navigation>
            <DesktopNav.Authentication>
              <p>Login</p>
              <Button>Sign Up</Button>
            </DesktopNav.Authentication>
          </DesktopNav>
        </Navbar>
        <MobileNav
          animate={isToggled ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
          initial={false}
        >
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul>
            <li>Login</li>
          </ul>
          <Button>Sign Up</Button>
        </MobileNav>
      </Container>
    </Header>
  );
};

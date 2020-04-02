import React from "react";
import styled from "styled-components";
import Container from "./Container";
import boostMobile from "../images/bg-boost-desktop.svg";

const Footer = styled.footer``;

Footer.Upper = styled.div`
  background-image: ${() => `url(${boostMobile})`};
  background-color: ${({ theme }) => theme.darkViolet};
  background-size: cover;
`;

Footer.CTA = styled.div`
  color: white;
  text-align: center;
  padding: 4rem 0;
  h2 {
    margin-bottom: 1rem;
  }
`;

const Button = styled.a`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem 3rem;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
`;

export default () => {
  return (
    <Footer>
      <Footer.Upper>
        <Footer.CTA>
          <h2>Boost your links today</h2>
          <Button>Get Started</Button>
        </Footer.CTA>
      </Footer.Upper>
    </Footer>
  );
};

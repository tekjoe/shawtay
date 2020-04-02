import React from "react";
import styled from "styled-components";
import worker from "../images/illustration-working.svg";
import Container from "./Container";

const Masthead = styled.section``;

Masthead.Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    margin-bottom: 0;
  }
`;

Masthead.Image = styled.div`
  background: ${() => `url(${worker})`};
  background-position: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  @media (min-width: 768px) {
    flex: 1;
    height: 500px;
    background-size: contain;
    background-position: center;
  }
`;

Masthead.CTA = styled.div`
  text-align: center;
  flex: 1;
  padding: 2rem 1rem;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.veryDarkViolet};
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    text-align: left;
    margin: auto;

    h2 {
      font-size: 4rem;
      margin-bottom: 0.5rem;
    }
    p {
      padding-right: 6rem;
    }
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
    <Masthead>
      <Container>
        <Masthead.Content>
          <Masthead.Image />
          <Masthead.CTA>
            <h2>More than just shorter links</h2>
            <p>
              Build by your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button>Get Started</Button>
          </Masthead.CTA>
        </Masthead.Content>
      </Container>
    </Masthead>
  );
};

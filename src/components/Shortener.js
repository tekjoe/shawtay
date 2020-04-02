import React from "react";
import styled from "styled-components";
import background from "../images/bg-shorten-desktop.svg";
import Container from "./Container";

const Shortener = styled.div`
  background: ${({ theme }) => `${theme.darkViolet} url(${background})`};
  background-size: cover;
  padding: 1.5rem;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

Shortener.Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  background: white;
  color: ${({ theme }) => theme.veryDarkViolet};
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1.25rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
    width: 80%;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
  @media (min-width: 768px) {
    width: 20%;
  }
`;

export default () => {
  return (
    <Container>
      <Shortener>
        <Shortener.Form>
          <Input placeholder="Shorten a link here..." />
          <SubmitButton onClick={e => e.preventDefault()}>
            Shorten It!
          </SubmitButton>
        </Shortener.Form>
      </Shortener>
    </Container>
  );
};

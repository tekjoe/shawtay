import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../images/bg-shorten-desktop.svg";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -10rem;
`;

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

const ValidatedFieldset = styled.fieldset`
  width: 100%;
  border: none;
  margin-bottom: 1.25rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
    width: 80%;
  }
`;

const Input = styled.input`
  background: white;
  color: ${({ theme, hasErrors }) =>
    hasErrors ? theme.red : theme.veryDarkViolet};
  padding: 1rem;
  border-radius: 0.5rem;
  border: ${({ hasErrors, theme }) =>
    hasErrors ? `3px solid ${theme.red}` : "3px solid white"};
  font-size: 1.125rem;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ResultsList = styled.div`
  margin: 2rem 0;
`;

ResultsList.Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background: white;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
  }
`;

ResultsList.Item.Url = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  @media (min-width: 768px) {
    border-bottom: none;
    flex: 4;
  }
`;

ResultsList.Item.ShortenedUrl = styled.div`
  padding: 0.5rem 1rem;
  a {
    color: ${({ theme }) => theme.cyan};
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
const CopyButton = styled.a`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0 1rem 1rem 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
  @media (min-width: 768px) {
    margin: 1rem;
    padding: 0.5rem 3rem;
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.red};
  font-style: italic;
  @media (min-width: 768px) {
    position: absolute;
  }
`;

export default () => {
  const apiEndpoint = "https://rel.ink/api/links/";
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const handleChange = e => {
    setUrl(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(apiEndpoint, { url })
      .then(res => {
        setShortenedUrls([
          ...shortenedUrls,
          { url, shortenedUrl: `https://rel.ink/${res.data.hashid}` }
        ]);
        setHasErrors(false);
      })
      .catch(err => setHasErrors(!hasErrors));
  };
  const handleCopy = e => {
    e.target.innerText = "Copied!";
    e.target.style.backgroundColor = "hsl(260, 8%, 14%)";
  };
  return (
    <Container>
      <Shortener>
        <Shortener.Form>
          <ValidatedFieldset>
            <Input
              placeholder="Shorten a link here..."
              onChange={handleChange}
              value={url}
              id="urlForm"
              hasErrors={hasErrors}
            />
            {hasErrors ? <Error>Please add a valid link</Error> : null}
          </ValidatedFieldset>
          <SubmitButton onClick={handleSubmit}>Shorten It!</SubmitButton>
        </Shortener.Form>
      </Shortener>
      <ResultsList>
        {shortenedUrls.length
          ? shortenedUrls.map(shortened => (
              <ResultsList.Item key={shortenedUrls.indexOf(shortened)}>
                <ResultsList.Item.Url>
                  <p>{shortened.url}</p>
                </ResultsList.Item.Url>
                <ResultsList.Item.ShortenedUrl>
                  <a
                    href={shortened.shortenedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shortened.shortenedUrl}
                  </a>
                </ResultsList.Item.ShortenedUrl>
                <CopyButton onClick={handleCopy}>Copy</CopyButton>
              </ResultsList.Item>
            ))
          : null}
      </ResultsList>
    </Container>
  );
};

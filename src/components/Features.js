import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Shortener from "./Shortener";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Features = styled.section`
  background: ${({ theme }) => theme.lightGrayishViolet};
  padding: 5rem 1.5rem;
`;

Features.Benefit = styled.div`
  text-align: center;
  padding: 4rem 1rem 5rem 1rem;
  h2 {
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.veryDarkViolet};
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
  }
`;

Features.FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

Features.Feature = styled.div`
  background: white;
  text-align: center;
  display: flex;
  border-radius: 0.5rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    width: auto;
    &:nth-child(3) {
      margin-top: 2rem;
    }
    &:nth-child(5) {
      margin-top: 4rem;
    }
  }
`;

Features.Divider = styled.span`
  width: 0.5rem;
  height: 6rem;
  display: block;
  background: ${({ theme }) => theme.cyan};
  @media (min-width: 768px) {
    height: 0.5rem;
    width: 6rem;
    align-self: center;
  }
`;

const IconContainer = styled.div`
  background: ${({ theme }) => theme.darkViolet};
  padding: 1.25rem;
  border-radius: 100%;
  margin-bottom: 2rem;
  margin-top: -4.5rem;
  display: flex;
  img {
    display: block;
  }
`;

export default () => {
  return (
    <Features>
      <Container>
        <Shortener />
        <Features.Benefit>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </Features.Benefit>
        <Features.FeatureList>
          <Features.Feature>
            <IconContainer>
              <img src={brandRecognition} alt="Brand Recoginition Icon" />
            </IconContainer>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </Features.Feature>
          <Features.Divider />
          <Features.Feature>
            <IconContainer>
              <img src={detailedRecords} alt="DetaileD records Icon" />
            </IconContainer>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engaging with your content helps inform better
              decisions.
            </p>
          </Features.Feature>
          <Features.Divider />
          <Features.Feature>
            <IconContainer>
              <img src={fullyCustomizable} alt="Fully Customizable Icon" />
            </IconContainer>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </Features.Feature>
        </Features.FeatureList>
      </Container>
    </Features>
  );
};

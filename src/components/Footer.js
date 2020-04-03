import React from "react";
import styled from "styled-components";
import boostMobile from "../images/bg-boost-desktop.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

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

Footer.Lower = styled.div`
  background: ${({ theme }) => theme.veryDarkViolet};
  display: grid;
  padding: 3rem;
  color: white;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  text-align: center;
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    li {
      color: ${({ theme }) => theme.grayishViolet};
      margin-bottom: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    text-align: left;
    padding: 5rem;
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

Footer.Social = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin: 0 0.5rem;
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
      <Footer.Lower>
        <h3>Shortly</h3>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <Footer.Social>
            <li>
              <img src={facebook} alt="Facebook Icon" />
            </li>
            <li>
              <img src={twitter} alt="twitter Icon" />
            </li>
            <li>
              <img src={pinterest} alt="pinterest Icon" />
            </li>
            <li>
              <img src={instagram} alt="instagram Icon" />
            </li>
          </Footer.Social>
        </div>
      </Footer.Lower>
    </Footer>
  );
};

import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="footer__linksLeft">
        <p className="footer__link">Audio and Subtitle</p>
        <p className="footer__link">Media Center</p>
        <p className="footer__link">Privacy</p>
        <p className="footer__link">Contact Us</p>
        <p className="footer__link">Audio Description</p>
      </div>
      <div className="footer__linksRight">
        <p className="footer__link">Legal Information</p>
        <p className="footer__link">Service Center</p>
        <p className="footer__link">Cookie Preference</p>
        <p className="footer__link">Company Information</p>
      </div>
      <h2>
        Powered by <span>TMDB</span>
      </h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 980px;
  background-color: #111;
  margin: 50px auto 0;
  padding-bottom: 50px;

  .footer__linksLeft {
    font-size: 0.8rem;
    flex-basis: 50%;
    align-items: flex-start;
    margin: 0 0 14px 0;
    padding: 0;

    .footer__link {
      flex: 0 0 50%;
      color: gray;
      margin-bottom: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer__linksRight {
    font-size: 0.8rem;
    flex-basis: 50%;
    align-items: flex-start;
    margin: 0 0 14px 0;
    padding: 0;

    .footer__link {
      flex: 0 0 50%;
      color: gray;
      margin-bottom: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h2 {
    color: #f5f5f5;
  }
`;

// const FooterBody = styled.div``;

export default Footer;

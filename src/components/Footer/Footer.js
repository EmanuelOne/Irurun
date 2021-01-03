import React from "react";
import { Container, Row } from "./Footer.elements";
const Footer = () => {
  return (
    <Container>
      <Row>
        <img src="images/logo.svg" alt="" />{" "}
      </Row>
      <Row>
        <p>Office</p>
        <p>4 perez Drive ,</p>
        <p>Lekki Phase 1, Lagos</p>
      </Row>
      <Row>
        <p>Contact</p>
        <p>hello@gmail.com</p>
        <p>+234 809 66 8877</p>
      </Row>
      <Row>
        <p>powered by YesCredit Limited,</p>
        <p>licenced as aMoney Lender by</p>
        <p>the Lagos State Government of</p>
        <p>Nigeria.</p>
      </Row>
      <div className="foot">
        &copy; {new Date().getFullYear()} irurun Limited
      </div>
    </Container>
  );
};

export default Footer;

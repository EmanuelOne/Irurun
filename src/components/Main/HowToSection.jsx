import React from "react";
import { Container, Row } from "./Main.elements";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
export const HowToSection = () => {
  const ArrowCon = styled.div`
    border-radius: 50%;
    padding: 0.3rem;
    background-color: ${({ color }) => (color ? color : "var(--purple)")};
    margin: auto 0;
    color: #fff;
  `;
  const Arrow = styled(IoIosArrowForward)`
    font-size: 1.6rem;
    margin: auto 0;
    @media screen and (max-width: 960px) {
      transform: rotate(90deg);
    }
  `;
  return (
    <Container smallP center fit sps={3}>
      <Row align="center" border sps={3} color="var(--purple)">
        <img src="images/frame1.png" alt="" />
        <p>Set up an account</p>
        <p>Download the app for free,Sign up and verify your account </p>
      </Row>
      <ArrowCon>
        <Arrow />
      </ArrowCon>
      <Row align="center" border sps={3} color="var(--brown)">
        <img src="images/frame2.png" alt="" />
        <p>Apply for a loan</p>
        <p>
          Apply for a loan and our Technology will run a credit score to decide
          if you a qualify
        </p>
      </Row>
      <ArrowCon color="var(--brown)">
        <Arrow />
      </ArrowCon>
      <Row align="center" border sps={3} color="var(--green)">
        <img src="images/frame3.png" alt="" />
        <p>Get your cash</p>
        <p>
          If you are qualify your loan will be disbursed to your wallet
          instantly{" "}
        </p>
      </Row>
    </Container>
  );
};

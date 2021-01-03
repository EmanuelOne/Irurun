import React from "react";
import styled from "styled-components";
import { Button } from "./Main.elements";
const Container = styled.div`
  display: flex;
  background-color: var(--green);
  gap: ${({ gap }) => gap && gap + "rem"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
const Row = styled.div`
  display: flex;
  gap: ${({ gap }) => gap && gap + "rem"};
  flex-direction: ${({ col }) => col && "column"};
  & > .p {
    font-size: ${({ fsize }) => fsize && fsize + "px"};
    width: ${({ w }) => (w ? w + "%" : "fit-content")};
    text-align: center;
    color: ${({ color }) => color && color};
  }
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: ${({ column }) => column && "column"};
    & > .p {
      width: 100%;
      font-size: 20px;
    }
  }
`;
const getItSection = () => {
  return (
    <Container gap={2}>
      <Row w={80} color="white" fsize={25} col gap={1}>
        <p className="p"> Get it on Play Store and Download on The App Store</p>
        <Row gap={3} column>
          {" "}
          <Button google={true}>
            <Row>
              <img src="images/googlePlay.svg" alt="" />
            </Row>
            <Row col>
              <p>Get it on</p>
              <p>Play store</p>
            </Row>
          </Button>
          <Button>
            <Row>
              <img src="images/app.svg" alt="" />
            </Row>
            <Row col>
              <p>Get it on</p>
              <p>App store</p>
            </Row>
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default getItSection;

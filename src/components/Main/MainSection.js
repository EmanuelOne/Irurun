import React from "react";
import { Container, Row, RowImg, Button } from "./Main.elements";

export const MainSection = ({ rev, src }) => {
  return (
    <>
      <Container rev={rev} src={src}>
        <Row sps={2}>
          <h2>Get Instant Loan</h2>
          <p>Get Instant loan from your smartphone</p>
          <div className="btns">
            <Button google={true}>
              <Row>
                <img src="images/googlePlay.svg" alt="" />
              </Row>
              <Row>
                <p>Get it on</p>
                <p>Play store</p>
              </Row>
            </Button>
            <Button>
              <Row>
                <img src="images/app.svg" alt="" />
              </Row>
              <Row>
                <p>Get it on</p>
                <p>App store</p>
              </Row>
            </Button>
          </div>
        </Row>
        <RowImg>
          <img src={`images/illustration${src}.png`} alt="" />
        </RowImg>
      </Container>
    </>
  );
};

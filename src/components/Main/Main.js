import React from "react";
import styled from "styled-components";
import { HowToSection } from "./HowToSection";
import { MainSection } from "./MainSection";
import GetItSection from "./getItSection";
const Main = () => {
  const C = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
  `;
  return (
    <C>
      <MainSection src={2} />
      <MainSection rev={true} src={1} />
      <HowToSection />
      <GetItSection />
    </C>
  );
};

export default Main;

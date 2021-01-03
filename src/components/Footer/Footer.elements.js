import styled from "styled-components";
import { Container as C } from "../../globalStyles";
export const Container = styled(C)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 50px;
  justify-content: center;
  align-items: center;
  color: var(--black);
  grid-row-gap: 2.5rem;
  @media screen and (max-width: 960px) {
    justify-items: flex-start;
    grid-template-columns: repeat(1, 1fr);
    
  }
  .foot {
    justify-self: center;
    grid-column: span 4;
  }
`;
export const Row = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &:last-of-type {
    justify-self: flex-end;
  }
  &:first-of-type {
    justify-self: flex-start;
  }
  @media screen and (max-width: 960px) {
    & {
      grid-column: 1/3;
      justify-self: flex-start;
    }
  }
`;

import styled from "styled-components";
import { Container as C, Button as B } from "../../globalStyles";
export const Row = styled.div`
  text-align: ${({ align }) =>
    !align ? "" : align === "center" ? align : null};
  gap: ${({ sps }) => sps && `${sps - 1}rem`};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align && "center"};
  padding: ${({ align }) => align && "2rem 0"};
  width: ${({ align }) => align && "70%"};
  height: ${({ align }) => align && "300px"};
  justify-content: ${({ align }) => align && "center"};
  border-radius: ${({ align }) => align && "10px"};
  border-top: ${({ color }) => color && `10px solid ${color}`};
  box-shadow: ${({ align }) => align && "0px 0px 3px 2px #11294540"};
  @media screen and (max-width: 960px) {
    width: ${({ align }) => align && "100%"};
    padding: ${({ align }) => align && "2rem"};
  }
`;
export const RowImg = styled.div`
  width: 400px;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
  }
`;
export const Container = styled(C)`
  display: flex;
  gap: ${({ sps }) => sps && `${sps}rem`};
  flex-direction: ${({ rev }) => (rev ? "row-reverse" : "row")};
  width: 100%;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
  color: ${({ color }) => (color ? color : "var(--primary)")};
  background-color: ${({ color }) => (color ? color : "transparent")};
  margin: ${({ mg }) => mg && mg};
  h2 {
    font-size: 60px;
    font-weight: 700;
  }
  img {
    width: ${({ fit }) => fit && "fit-content"};
  }
  p {
    font-size: ${({ smallP }) => (smallP ? "16px" : "30px")};
    font-weight: 100;
    width: 80%;
  }
  .btns {
    display: flex;
    gap: 1rem;
  }
  @media screen and (max-width: 960px) {
    flex-direction: ${({ src }) => (src ? "column-reverse" : "column")};
    flex-direction: ${({ smallP }) => smallP && "column"};
    .btns {
      flex-direction: column;
      align-items: center;
    }
    h2 {
      font-size: 3rem;
      text-align: center;
    }
    p {
      font-size: ${({ smallP }) => !smallP && "1.5rem"};
      width: 100%;
      text-align: center;
    }
  }
`;
export const Button = styled(B)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeaff;
  column-gap: 1rem;
  padding: 0.5rem 2rem;

  img {
    width: 30px;
  }
  p {
    font-size: 16px;
    width: 100%;
  }
  p:last-of-type {
    color: ${({ google }) => (google ? `var(--green)` : `var(--purple)`)};
    font-size: 20px;
  }
  /* width: 40px;
  height: 20px; */
  @media screen and (max-width: 960px) {
    p:last-of-type {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;

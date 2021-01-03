import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
body{
    overflow-x:hidden;
  font-family: "Work Sans", sans-serif;

}
:root{
   --primary: #112945;
 --green: #0FA47F;

 --lightGreen: #24C6A1;

 --purple: #5718FF;
--brown: #FF814A;
--black:#545659;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: auto;

  @media screen and (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    transition: all 0.3s ease-out;
  }
`;

export default GlobalStyle;

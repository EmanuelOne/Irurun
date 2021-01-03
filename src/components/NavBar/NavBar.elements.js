import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  background: #fffff0d9;
  z-index: 999;
`;
export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;
export const NavLogo = styled(Link)`
  justify-self: flex-start;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`;
export const NavMenu = styled.ul`
  align-items: center;
  list-style: none;
  text-align: center;
  display: flex;
  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    background-color: #fff;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 1rem 0;
    bottom: 0px;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    z-index: 77;
    transition: all 0.5s ease;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  font-family: "Work Sans", sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  &:hover,
  &:active {
    border-bottom: 2px solid var(--lightgreen);
    color: var(--green);

    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 1.2rem;

    border: none;
    &:hover {
      background-color: var(--lightgreen);
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  }
`;
export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color: var(--primary);
  &:active {
    color: var(--green);
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;

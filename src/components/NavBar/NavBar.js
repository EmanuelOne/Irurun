import React, { useState } from "react";
import {
  MobileIcon,
  Nav,
  NavItem,
  NavMenu,
  NavLinks,
  NavBarContainer,
  NavLogo,
} from "./NavBar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" as="img" src="images/logo.svg"></NavLogo>
          <MobileIcon onClick={() => setClick((p) => !p)}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click} onClick={() => setClick((p) => !p)}>
            <NavItem>
              <NavLinks className="active" to="/">
                Home
              </NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/">Contact</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/">Privacy</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;

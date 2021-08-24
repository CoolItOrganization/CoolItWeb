import { React, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
//import Link from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  HotLine,
  NavLinksR
} from "./NavbarElements";
import logo from "./images/1.png";

const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop({ duration: 500 });
  };
  const changeNav = () => {
    if (window.scrollY >= 30) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer isOpen={isOpen}>
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={logo} />
          </NavLogo>
          <MobileIcon>
            <FaBars style={{ color: "#141645" }} onClick={toggle} />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Service"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Review"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Reviews
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksR to="SignUp">Sign Up</NavLinksR>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/SignIn">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

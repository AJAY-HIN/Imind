import React, { useEffect, useState, useRef } from "react";
import { span } from "react-router-dom";
import { CommonButton } from "../Button/Button.style";
import {
  Container,
  MainNav,
  Nav,
  NavSpan,
  Ul,
  Li,
  ButtonContainer,
} from "./Navbar.style";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 20 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <>
      <MainNav className={`mainNav ${stickyClass}`}>
        <Container>
          <ButtonContainer className="navBtn">
            <CommonButton />
          </ButtonContainer>
          <Nav>
            <NavSpan>
              <Ul>
                <Li>
                  <span>Home</span>
                </Li>
                <Li>
                  <span>About Us</span>
                </Li>
                <Li>
                  <span>Blogs</span>
                </Li>
              </Ul>
            </NavSpan>
          </Nav>
          <ButtonContainer>
            <CommonButton>
              <span>
                Get A Qoute! <AiOutlineArrowRight className="arrowIcon" />
              </span>
            </CommonButton>
          </ButtonContainer>
        </Container>
      </MainNav>
    </>
  );
};

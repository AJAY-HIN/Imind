import styled from "styled-components";

export const MainNav = styled.div`
  background: transparent;
  z-index: 1;
  position: relative;
  top: 0;
  color: #ffffff;
  transition: ease-in 0.3s;
  &.sticky-nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: black;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Nav = styled.nav`
  ${
    "" /* display: flex;
  justify-content: space-around;
  flex-direction: ; */
  }
`;

export const NavSpan = styled.span``;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 1rem 1rem;
  font-weight: 600;
  font-family: Mulish, sans-serif;
  font-size: 15px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 6rem;

  ${
    "" /* &.navBtn {
    left: 6rem;
  } */
  }
`;

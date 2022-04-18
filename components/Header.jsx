import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Squash as Hamburger } from "hamburger-react"

function Header() {
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Logo>
          <a href="#hero">{"< V/J >"}</a>
        </Logo>
        <NavList displayMenu={displayMenu}>
          <NavItem onClick={() => setDisplayMenu((prev) => !prev)}>
            <a href="#hero">Home</a>
          </NavItem>
          <NavItem onClick={() => setDisplayMenu((prev) => !prev)}>
            <a href="#about">About</a>
          </NavItem>
          <NavItem onClick={() => setDisplayMenu((prev) => !prev)}>
            <a href="#skills">Skills</a>
          </NavItem>
          <NavItem onClick={() => setDisplayMenu((prev) => !prev)}>
            <a href="#projects">Projects</a>
          </NavItem>
          <NavItem onClick={() => setDisplayMenu((prev) => !prev)}>
            <a href="#contact">Contact</a>
          </NavItem>
        </NavList>
        <NavToggle>
          <Hamburger
            toggled={displayMenu}
            toggle={setDisplayMenu}
            size={24}
            rounded
            color="#fff"
          />
        </NavToggle>
      </Wrapper>
    </Container>
  )
}

const Container = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgba(60, 60, 67, 0.12);
  background-color: #8444df;
`

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  margin: 0 auto;
  max-width: 1200px;
`

const Logo = styled.div`
  margin: 0 0.4em;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 768px) {
    margin-left: 1em;
  }
`

const NavList = styled.ul`
  position: absolute;
  display: ${(props) => (props.displayMenu ? "flex" : "none")};
  list-style: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 60px;
  left: 50%;
  background-color: rgba(132, 68, 223, 0.95);
  color: #fff;
  height: calc(100vh - 60px);
  width: 100.5vw;
  transform: translateX(-50%);
  animation: slideIn 0.6s;

  animation: slideIn 0.4s;
  @media (min-width: 768px) {
    display: flex;
    height: auto;
    width: auto;
    position: static;
    flex-direction: row;
    transform: none;
  }
`

const NavItem = styled.li`
  padding: 1em 2em;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.1);
    font-weight: 600;
  }
`

const NavToggle = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`

export default Header

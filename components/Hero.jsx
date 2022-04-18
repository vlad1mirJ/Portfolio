import React from "react"
import styled from "styled-components"

function Hero() {
  return (
    <Section id="hero">
      <Container>
        <img src="images/developer-icon.svg" alt="" />
        <Greeting>👋 Hi there! I'm</Greeting>
        <Name>
          <span style={{ color: "rgba(132, 68, 223, 1)" }}>Vladimiras</span>{" "}
          Jankauskas
        </Name>
        <Bio>
          A{" "}
          <span style={{ color: "rgba(132, 68, 223, 1)" }}>
            Front-End Developer
          </span>{" "}
          passionate about creating interactive applications and experiences on
          the web.
        </Bio>
        <Buttons>
          <Projects>
            <a href="#projects">See my Work</a>
          </Projects>
          <a href="/Resume.pdf" download>
            <Resume>Resume</Resume>
          </a>
        </Buttons>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  scroll-margin-top: 100px;
`

const Container = styled.div`
  text-align: center;
  padding: 0 2em;
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    align-self: center;
    width: 200px;
    @media (min-width: 600px) {
      width: 300px;
    }
  }
`

const Greeting = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  margin-top: 1em;
`

const Name = styled.h1`
  font-size: 3rem;
`

const Bio = styled.p`
  font-size: 1.5rem;
  margin: 0.5em 0 1em;
  line-height: 1.5;
  max-width: 750px;
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 400px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    margin-top: 1em;
  }
`

const Projects = styled.button`
  background-color: rgba(132, 68, 223, 1);
  border: none;
  width: 140px;
  font-size: 1rem;
  color: white;
  padding: 0.5em 1.25em;
  border-radius: 3px;
  margin: 0 0 1em 0;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
  @media (min-width: 400px) {
    margin: 0 1em 0 0;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    width: auto;
    margin-right: 1.2em;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Resume = styled.button`
  font-size: 1rem;
  width: 140px;
  color: rgba(132, 68, 223, 1);
  padding: 0.5em 1.25em;
  background-color: white;
  border: 1px solid rgba(132, 68, 223, 1);
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    width: auto;
  }
`

export default Hero

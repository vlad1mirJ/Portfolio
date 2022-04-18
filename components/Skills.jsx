import React from "react"
import styled from "styled-components"
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa"
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactrouter,
  SiFirebase,
} from "react-icons/si"

function Skills() {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Wrapper>
        <Skill>
          <Icon>
            <AiFillHtml5 />
          </Icon>
          <SkillName>HTML</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <FaCss3Alt />
          </Icon>
          <SkillName>CSS</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <SiJavascript />
          </Icon>
          <SkillName>JS</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <FaReact />
          </Icon>
          <SkillName>React</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <SiNextdotjs />
          </Icon>
          <SkillName>Next JS</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <FaGitAlt />
          </Icon>
          <SkillName>Git</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <SiStyledcomponents />
          </Icon>
          <SkillName id="styled-components">Styled Components</SkillName>
        </Skill>
        <Skill id="react-router">
          <Icon>
            <SiReactrouter />
          </Icon>
          <SkillName>React Router</SkillName>
        </Skill>
        <Skill>
          <Icon>
            <SiFirebase />
          </Icon>
          <SkillName>Firebase</SkillName>
        </Skill>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #8444df;
  padding: 2em 1em;
  scroll-margin-top: 80px;
`

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  max-width: 1000px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 1em;
  letter-spacing: 0.08em;
`

const Skill = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &#react-router {
    @media (min-width: 768px) {
      display: none;
    }
  }
`

const Icon = styled.span`
  font-size: 3rem;
  color: white;
`

const SkillName = styled.p`
  font-size: 1rem;
  margin-top: 0;
  color: white;
  max-width: 100px;
  &#styled-components {
    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`

export default Skills

import React from "react"
import styled from "styled-components"

function ProjectTemplate(props) {
  const {
    projectName,
    imageSource,
    technologyUsed,
    features,
    githubLink,
    demoLink,
  } = props
  return (
    <Project>
      <Image>
        <img src={imageSource} alt="" />
      </Image>
      <Wrapper>
        <ProjectName>{projectName}</ProjectName>
        <TechUsed>
          Technologies used:{" "}
          <span>{technologyUsed.map((tech) => `${tech}`)}</span>
        </TechUsed>
        <Features>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </Features>
        <Buttons>
          <a href={githubLink} target="_blank">
            GitHub
          </a>
          <a href={demoLink} target="_blank">
            Live version
          </a>
        </Buttons>
      </Wrapper>
    </Project>
  )
}

const Wrapper = styled.div`
  padding: 1em;
  @media (min-width: 768px) {
    margin-left: 1em;
    max-width: 570px;
  }
`

const Project = styled.div`
  max-width: 1080px;
  margin: 1.5em auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 1px 3px 0 rgb(0 0 0 / 15%), 0px 1px 2px 0 rgb(0 0 0 / 10%);
  border-radius: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 3em auto 0;
  }
  /* transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  } */
`
const Image = styled.div`
  margin: 0;
  padding: 0;
  font-size: 0;
  img {
    border-radius: 20px;
    width: 100%;
    max-width: 500px;
    margin: 0;
    box-shadow: 0px 1px 3px 0 rgb(0 0 0 / 15%), 0px 1px 2px 0 rgb(0 0 0 / 10%);
  }
`
const ProjectName = styled.h3`
  color: #8444df;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    margin-top: 1em;
  }
`
const TechUsed = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1em;
  span {
    color: #8444df;
  }
`
const Features = styled.ul`
  margin-left: 1em;
  li {
    margin-bottom: 0.5em;
  }
`
const Buttons = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-around;
  a {
    color: #8444df;
    text-decoration: none;
    transition: transform 0.2s ease-out;
    &:hover,
    &:active {
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) {
    margin-top: 2em;
  }
`

export default ProjectTemplate

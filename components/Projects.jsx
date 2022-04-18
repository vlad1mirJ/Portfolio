import React from "react"
import styled from "styled-components"
import ProjectTemplate from "./ProjectTemplate"
function Projects() {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <ProjectTemplate
        projectName={"LinkedIn Clone"}
        technologyUsed={[
          "React, ",
          "React Router, ",
          "Styled-Components, ",
          "Firebase, ",
          "Redux",
        ]}
        imageSource={"images/linkedIn.png"}
        features={[
          "Redux is used to manage global state of application",
          "Firebase is used as a database and to implement authentication",
          "React-Router helps navigate between login and feed pages",
        ]}
        githubLink={"https://github.com/vlad1mirJ/LinkedInClone"}
        demoLink={"https://linkedin-clone-cd539.web.app/"}
      />
      <ProjectTemplate
        projectName={"Realtor"}
        technologyUsed={["Next.JS, ", "REST API, ", "Chakra UI"]}
        imageSource={"images/realtor.png"}
        features={[
          "Chakra UI was used for fast creation of user interface",
          "All of the properties are taken from Bayut API",
          "Next.JS is used for navigation between the pages and also for SSR and SSG",
        ]}
        githubLink={"https://github.com/vlad1mirJ/Real-Estate-App"}
        demoLink={"https://real-estate-64d256fuj-vlad1mirj.vercel.app/"}
      />
      <ProjectTemplate
        projectName={"Personal blog"}
        technologyUsed={[
          "Next.JS, ",
          "GraphQL, ",
          "GraphCMS, ",
          "Tailwind CSS",
        ]}
        imageSource={"images/blog.png"}
        features={[
          "Tailwind CSS UI is used for fast creation of user interface",
          "GraphQL is used to make queries, GraphCMS is used to easily create and manage content",
          "Next.JS is used for navigation between the pages and also for SSR and SSG",
        ]}
        githubLink={"https://github.com/vlad1mirJ/Blog_project"}
        demoLink={"https://blog-project-cg23o2p12-vlad1mirj.vercel.app/"}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 2em 1em 3em;
  scroll-margin-top: 80px;
  background-color: f7f7f7;
`

const Title = styled.h2`
  font-size: 2rem;
  color: #8444df;
  text-align: center;
  margin-bottom: 0.3em;
  letter-spacing: 0.08em;
`

export default Projects

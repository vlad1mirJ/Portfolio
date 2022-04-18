import React from "react"
import styled from "styled-components"
import { FaGithubAlt } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { AiOutlineGithub } from "react-icons/ai"
function Footer() {
  return (
    <Container>
      <Wrapper>
        <a href="mailto:vladimirjankauskas@gmail.com" target="_blank">
          <IoIosMail />
        </a>
        <a href="https://github.com/vlad1mirJ" target="_blank">
          <AiOutlineGithub />
        </a>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: rgba(132, 68, 223, 1);
`

const Wrapper = styled.div`
  font-size: 32px;
  padding: 0 1.9em 0.2em;
  scroll-margin-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 220px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: white;
  }
`

export default Footer

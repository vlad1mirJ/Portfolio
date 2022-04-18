import React from "react"
import styled from "styled-components"

function About() {
  return (
    <Container id="about">
      <Container2nd>
        <Wrapper>
          <Title>About</Title>
          <Bio>
            <p>
              I am a <span>front-end developer</span> with a background in
              mechanical <span>engineering.</span> Throughout my awesome and yet
              not long life I have changed lots of hobbies and tried myself in
              different fields such as Magic Tricks, Manufacturing, Woodworking,
              Mnemonics, Photography, Mechanical Design and more...
            </p>
            <p>
              Due to <span>diversity</span> of hobbies I developed important
              skills like creative thinking, problem solving, fast learning and
              communication. If you are looking for an <span>honest</span> and
              <span> well rounded</span> person, then don't look further, I am
              your <span>go-to</span> guy! But if you can't accept that I love
              pizza with pineapples on top of it, then I am definitely not a
              great fit for you.
            </p>
          </Bio>
        </Wrapper>
      </Container2nd>
    </Container>
  )
}

const Container = styled.div`
  padding: 2.8em 1.9em;
  scroll-margin-top: 80px;
  background-color: #f7f7f7;
`

const Container2nd = styled.div`
  box-shadow: 0px 1px 3px 0 rgb(0 0 0 / 15%), 0px 1px 2px 0 rgb(0 0 0 / 10%);
  padding: 2em;
  border-radius: 6px;
  background-color: white;
  max-width: 1000px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  color: #8444df;
  text-align: center;
  margin-bottom: 0.3em;
  letter-spacing: 0.08em;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.div`
  width: 150px;
  height: 200px;
  background-color: brown;
`

const Bio = styled.div`
  font-size: 1rem;
  p {
    margin-top: 1em;
    span {
      color: #8444df;
      font-weight: 600;
    }
  }
`

export default About

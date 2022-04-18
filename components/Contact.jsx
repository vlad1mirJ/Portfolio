import { useState } from "react"
import styled from "styled-components"
import emailjs from "@emailjs/browser"
import { BsCheck2Circle } from "react-icons/bs"
import { MdErrorOutline } from "react-icons/md"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .send(
        "service_t0wy0vt",
        "template_0vrzk4p",
        { name, email, message },
        "UEqZSREjsfRb14_zF"
      )
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          setShowSuccessMessage(true)
          setTimeout(() => setShowSuccessMessage(false), 5000)
        } else {
          setShowErrorMessage(true)
          setTimeout(() => setShowErrorMessage(false), 5000)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container id="contact">
      <Title>Leave a message</Title>
      {showSuccessMessage && (
        <Success>
          <div>
            <span>
              <BsCheck2Circle />
            </span>
            <Text>
              Your message is sent successfully! I will replay to you within 72h
            </Text>
          </div>
        </Success>
      )}
      {showErrorMessage && (
        <Error>
          <div>
            <span>
              <MdErrorOutline />
            </span>
            <Text>Something went wrong! Please, try again later.</Text>
          </div>
        </Error>
      )}
      <Wrapper id="form">
        <Name
          type={"text"}
          placeholder="Name"
          aria-label="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        />
        <Email
          type={"email"}
          placeholder="Email"
          aria-label="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Message
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          required
        />
        <Submit type={"submit"} onClick={(e) => sendEmail(e)}>
          Send
        </Submit>
      </Wrapper>
      {showErrorMessage && <p>Error</p>}
    </Container>
  )
}

const Container = styled.div`
  background-color: #8444df;
  padding: 2em 1em;
  scroll-margin-top: 80px;
  @media (min-width: 768px) {
    padding: 2em 1em;
  }
`

const Wrapper = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 0.3em;
  letter-spacing: 0.08em;
`

const Name = styled.input`
  padding: 0.5em 1.25em;
  font-size: 1.1em;
  border-radius: 3px;
  border: none;
  margin: 1em 0.5em;
  @media (min-width: 768px) {
    margin-right: 0.7em;
  }
`

const Email = styled.input`
  padding: 0.5em 1.25em;
  font-size: 1.1em;
  border-radius: 3px;
  border: none;
  margin: 0 0.5em 1em;
  @media (min-width: 768px) {
    margin: 1em 0.5em;
    margin-left: 0.7em;
  }
`

const Message = styled.textarea`
  resize: none;
  font-size: 1.1em;
  border-radius: 3px;
  border: none;
  margin: 0 0.5em 1.5em;
  padding: 0.5em 1.25em;
  @media (min-width: 768px) {
    grid-column: 1/-1;
    margin-top: 0.5em;
  }
`

const Submit = styled.button`
  font-size: 1rem;
  width: 140px;
  margin: 0 auto;
  color: rgba(132, 68, 223, 1);
  padding: 0.5em 1.25em;
  background-color: white;
  border: 1px solid rgba(132, 68, 223, 1);
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
    width: 150px;
    grid-column: 1/-1;
  }
`

const Success = styled.div`
  background-color: #6adb5b;
  max-width: 780px;
  padding: 1em;
  margin: 0 0.5em;
  border-radius: 5px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1em;
  }
  span {
    font-size: 1.5rem;
    line-height: 0;
    margin-right: 0.5em;
  }
  @media (min-width: 825px) {
    margin: 0 auto;
  }
`

const Text = styled.p``

const Error = styled(Success)`
  background-color: #ff5e00;
`

export default Contact

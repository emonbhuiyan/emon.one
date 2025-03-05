import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
          <p>Hello! I am</p>
          <h1>Emon Bhuiyan</h1>
          <h3>Freelancer & IT Professional</h3>
          <ul>
            <li>Data Analyst</li>
            <li>Web Researcher</li>
            <li>Virtual Assistant</li>
            <li>SEO Specialist</li>
            <li>WordPress Expert</li>
          </ul>
            <div className="action">
              <Button
                link="https://github.com/emonbhuiyan/emon.one/raw/master/src/data/file/MyResume.pdf"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }

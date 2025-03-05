import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
            Hello! I'm Emon Bhuiyan, a passionate freelancer specializing in IT, data analysis, web research, virtual assistance, SEO, and WordPress. I thrive on solving problems, ensuring data accuracy, and optimizing digital workflows. With a keen eye for detail, I strive to deliver high-quality results. I'm open to exciting opportunities—let's connect!
            </p>
            <div className="about-action">
              <Button
                link="https://github.com/emonbhuiyan/emon.one/raw/master/src/data/file/MyResume.pdf"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }

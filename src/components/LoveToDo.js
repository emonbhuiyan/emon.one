import React from "react"

import { Container, Title } from "./common"

import travelling from "../assets/image/travelling.svg"
import readingbooks from "../assets/image/readingbooks.svg"
import learningnewthings from "../assets/image/learningnewthings.svg"
import cooking from "../assets/image/cooking.svg"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={travelling} />
            <h4>Travelling</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={readingbooks} />
            <h4>Reading Books</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={learningnewthings} />
            <h4>Learning</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={cooking} />
            <h4>Cooking</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
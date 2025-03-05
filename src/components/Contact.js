import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
            I'm open to collaborating with companies that can benefit from my skills in IT, data analysis, web research, virtual assistance, SEO, and WordPress. If you're looking for someone like me, feel free to reach out—or just say hi!
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:mdemonbhuiyan@live.com"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                mdemonbhuiyan@live.com <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>Skype</h5>
                <p>
                  live:mdemonbhuiyan <span>(Always Available)</span>
                </p>
              </li>
              <li>
                <h5>Social</h5>
                <p>
                  Facebook - @emoncontact <span>(Slow response)</span>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Narayanganj, Dhaka, Bangladesh - 1200</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }

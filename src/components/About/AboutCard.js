import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpit Paliwal </span>  
            from <span className="purple">Kanpur, UP.</span>
            <br />
            I am currently a <span className="purple">MERN Full Stack Developer</span>.
            <br />
            I am passionate about building web applications, exploring new technologies, 
            and solving real-world problems through code.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Articles and Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

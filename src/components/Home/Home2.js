import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/b1.png"; // Update this if you have your own image
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <span className="purple">Arpit Paliwal</span>, a passionate
              <i> MERN Full Stack Developer</i> and Freelancer.
              <br />
              <br />
              I am fluent in the following technologies:
              <i>
                <b className="purple"> JavaScript, React.js, Node.js, Express.js, MongoDB </b>
              </i>
              <br />
              <br />
              My interests include building modern and scalable web applications,
              working especially with the <b className="purple">MERN Stack</b> for both
              frontend and backend development.
              <br />
              <br />
              As a freelancer, I am always eager to collaborate on innovative web
              technologies, products, and solutions.
              <br />
              <br />
              I enjoy contributing to open-source projects and working with modern
              <b className="purple"> JavaScript Libraries and Frameworks</b> like <i><b className="purple">React.js</b></i> and <i><b className="purple">Next.js</b></i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Arpit0408"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* Twitter removed as you did not provide a link */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arpit-paliwal-47b660248/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iamarpitpaliwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

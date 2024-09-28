import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

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
             I'm also a big fan of
              <i>
                <b className="purple">ReactJs </b>
                and have around <b className="purple">
                4 years
                </b> experience with it.
              </i>
              <br />
              <br />
              I have also fiddled with &nbsp;
              <i>
                <b className="purple">Angular framework.</b> I'm eager to learn new frameworks, libraries and languages like <b className="purple">
                NextJs
                </b>  and  <b className="purple">
                Vue.js
                </b> .{" "}

              </i>
              <br />
              <br />
              Though I spend most of my time writing code for building User Interfaces, I've also fiddled with many Back-end technologies and I also had <b className="purple">3 year</b> experience in <b className="purple">.net Core</b>.
              <br />
              <br />
              I like enjoying working in the intersection of <b className="purple">design</b> and  <b className="purple">development</b>. I feel most productive when I'm able to design <b className="purple">User Interfaces</b> which not only look good but has a good performance as well.

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
                  href="https://github.com/hunghoang310399"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hunghoang310399/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/hoangphihung3103"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SGAS"
              description="The perfect solution for your gas station. Monitor all oil activities and issue electronic invoices."
              ghLink="#"
              demoLink="https://sgas-dev.innovation.com.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Find-job"
              description="Employment Platform 4.0 - Providing a comprehensive, fast and convenient solution for candidates and employers"
              ghLink="#"
              demoLink="https://workport.vn/welcome"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SCity"
              description="Smart urban area management system, application for managing IoT devices. Helps operate the urban system in the fastest and smartest way"
              ghLink="#"
              demoLink="https://scity.innovation.com.vn/#contactSection/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SUI Dapp"
              description="Sui Generis Dapp is a decentralized application (dApp) built on the Sui blockchain, designed to offer innovative blockchain solutions. It enables users to engage with decentralized finance (DeFi), smart contracts, and digital assets securely."
              ghLink="#"
              demoLink="https://sui-dapp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="cncrypto.io"
              description="Evolving platform for cryptocurrency listing, token analysis, blockchain services, and more in China and Global."
              demoLink="https://cncrypto.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sensolus"
              description="Our platform is specifically designed to handle geographically dispersed assets and different use cases, at scale. Backed by a powerful search and filtering engine with visually pleasing dashboards, and customized to your use case. Access the data you need, when you need it!"

              demoLink="https://www.sensolus.com/tech/application-platform/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

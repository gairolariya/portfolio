import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { JobDetails } from "./JobDetails";
import { ImageSlider } from "./ImageSlider";
import projImg1 from "../assets/img/namshiNoon.png";
import projImg2 from "../assets/img/GlobalLogic_BLK.jpg";
import projImg3 from "../assets/img/AppDirect-Logo.jpg";
import CertificationsImg1 from "../assets/img/udemy.png";
import CertificationsImg2 from "../assets/img/freecodecamp-vector-logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
const [activeCard, setActiveCard] = useState(null);

const handleCardClick = (id) => {
  setActiveCard(activeCard === id ? null : id);
};

  const projects = [
    {
      title: "Frontend Development",
      description: "E-commerce",
      imgUrl: projImg1,
      duration: "2022-present" ,
      id: "namshi",
    },
    {
      title: "Senior Software Developer",
      description: "GOOGLE India Project",
      imgUrl: projImg2,
      duration: "2019-2022" ,
      id: "GL",
    },
    {
      title: "Associate Engineer",
      description: "Startup",
      imgUrl: projImg3,
      duration: "2017-2019" ,
      id: "appdirect",
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Certifications</h2>
                <div className="projectIntro">I'm a <b>Graduate in Computer Science Engineering</b> with a proven track record in efficiently coding websites and mobile applications, leveraging my expertise in various frontend frameworks and technologies. With a dynamic background in software development, I've been part of both startup and MNC environments, collaborating closely with clients to implement new features and customizations. My skill set spans software analysis, design, development, testing, debugging, and more.</div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certifications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            isActive={activeCard === project.id}
                            handleCardClick={() => handleCardClick(project.id)}
                            {...project}
                          />
                        ))}
                      </Row>

                      <div>
                        {
                          projects.map((project) => {
                            return (
                              <JobDetails
                                isActive={activeCard === project.id}
                                handleCardClick={() => handleCardClick(project.id)}
                                {...project}
                                />
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="certificationsContainer">
                    <article className="post">
                      <img src={CertificationsImg1} alt="Article thumbnail" />
                      <h1>ES6 Javascript: The Complete Developer's Guide, Udemy</h1>
                      <span> 2019 </span>
                    </article>
                    <article className="post">
                      <img src={CertificationsImg1} alt="Article thumbnail" />
                      <h1>React - The Complete Guide, Udemy </h1>
                      <span> 2019 </span>
                    </article>  
                    <article className="post">
                      <img src={CertificationsImg2} alt="Article thumbnail" />
                      <h1>Front End Web Development Cert nification, FreeCodeCamp</h1>
                      <span> 2021 </span>
                    </article> 
                    </div>                   
                    </Tab.Pane>
                  </Tab.Content>
                  <div>
                   <ImageSlider />
                  </div>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

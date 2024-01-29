import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import contactImg from "../assets/img/contact-img.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
    <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
            <img className={isVisible ? "animate__animated animate__zoomIn" : "" } src={contactImg}
                alt="Contact Us" />
            }
            </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                  <div className="skill-bx wow zoomIn">
                      <h2>Skills</h2>

                  {/* Technical SKills */}
                  <h5 className="skillsSetHeading"> <b>Technical Skills : </b></h5>
                  <div className="skillSet">HTML/HTML5, CSS/CSS3, JavaScript, Jquery, Typescript, SASS, SCSS, ES6,
                      Bootstrap, React, PHP, Twig, Responsive design </div>

                  {/* Testing */}
                  <h5 className="skillsSetHeading"> <b>Testing : </b></h5>
                  <div className="skillSet">JSWire (UI Framework Testing), Jasmine & Karma (Unit Testing) </div>

                  {/* Package Manager */}
                  <h5 className="skillsSetHeading"> <b>Package Manager : </b></h5>
                  <div className="skillSet">NPM, Webpack, Babel </div>

                  {/* Version Control System */}
                  <h5 className="skillsSetHeading"> <b>Version Control System & Tools : </b></h5>

                  <div className="skillSet"> GIT, JIRA, Buganizer, Figma, Docker </div>

                  {/* Analytics Technologies */}
                  <h5 className="skillsSetHeading"> <b>Analytics Technologies : </b></h5>
                  <div className="skillSet"> Google Analytics </div>

                  <Carousel responsive={responsive} infinite={true}
                      className="owl-carousel owl-theme skill-slider">
                      <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>Web Development</h5>
                      </div>
                      <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>HTML & CSS</h5>
                      </div>
                      <div className="item">
                          <img src={meter3} alt="Image" />
                          <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>React</h5>
                      </div>
                      <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>GIT</h5>
                      </div>
                      <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>Bootstrap</h5>
                      </div>
                      <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>Responsive Designs</h5>
                      </div>
                      </Carousel>
                  </div>
              </div>}
          </TrackVisibility>
          </Col>
        </Row>
    </Container>
    </section>
  )
}

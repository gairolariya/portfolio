import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin-logo.png";
import navIcon2 from "../assets/img/email.png";
import navIcon3 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/riya-gairola/"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:gairolariya@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/gairolariya"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

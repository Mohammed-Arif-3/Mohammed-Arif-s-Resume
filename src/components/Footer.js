import { Container, Row, Col } from "react-bootstrap";

import logo from "../assests/img/logo.svg";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohammed-arif-221723228/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100011813858489"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mohammed_arif_bin_yousuf/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© 2025 Mohammed Arif. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
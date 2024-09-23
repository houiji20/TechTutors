import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css'; // Create a separate CSS file for custom styles if needed

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container fluid className="p-4">
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are committed to providing high-quality online education and resources to help you succeed.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/courses" className="text-white">Courses</Nav.Link>
              <Nav.Link href="/about" className="text-white">About Us</Nav.Link>
              <Nav.Link href="/contact" className="text-white">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@elearningplatform.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Follow us on social media!</p>
            <Nav>
              <Nav.Link href="#" className="text-white">Facebook</Nav.Link>
              <Nav.Link href="#" className="text-white">Twitter</Nav.Link>
              <Nav.Link href="#" className="text-white">Instagram</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        &copy; {new Date().getFullYear()} E-Learning Platform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

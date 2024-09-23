import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Container fluid className="p-5">
      <h1 className="text-center mb-4">Welcome to Our E-Learning Platform</h1>

      {/* Carousel for featured courses */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Featured+Course+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Featured Course 1</h3>
            <p>Learn the fundamentals of programming with Python.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Featured+Course+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Featured Course 2</h3>
            <p>Master web development with React.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="text-center my-4">Our Courses</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Course+1" />
            <Card.Body>
              <Card.Title>Course 1</Card.Title>
              <Card.Text>Get started with HTML, CSS, and JavaScript.</Card.Text>
              <Button variant="primary">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Course+2" />
            <Card.Body>
              <Card.Title>Course 2</Card.Title>
              <Card.Text>Dive deep into React and build modern applications.</Card.Text>
              <Button variant="primary">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Course+3" />
            <Card.Body>
              <Card.Title>Course 3</Card.Title>
              <Card.Text>Learn the basics of MySQL and database management.</Card.Text>
              <Button variant="primary">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* New section to represent the platform */}
      <section className="platform-representation text-center py-5">
        <Container>
          <h2>Why Choose Us?</h2>
          <p>
            Our platform is dedicated to providing a rich learning experience through high-quality courses, interactive content, and a supportive community. We aim to make education accessible and engaging for everyone.
          </p>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="shadow mb-3">
                <Card.Body>
                  <Card.Title>Expert Instructors</Card.Title>
                  <Card.Text>
                    Learn from industry experts with real-world experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow mb-3">
                <Card.Body>
                  <Card.Title>Interactive Learning</Card.Title>
                  <Card.Text>
                    Engage with interactive quizzes and hands-on projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow mb-3">
                <Card.Body>
                  <Card.Title>Community Support</Card.Title>
                  <Card.Text>
                    Join a vibrant community for discussions and networking.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Home;

import React from "react";
import SignupForm from "../components/SignUpForm/index.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = (props) => {
  return (
    <Container className="signup mt-4 text-white">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <SignupForm {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

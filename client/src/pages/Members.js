import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import Axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";

const Members = (props) => {
  // Destructure the logout function from AuthContext
  const { logout } = useContext(AuthContext);

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Members Page</h1>
          <Button
            className="m-1"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
          <Button
            className="m-1"
            onClick={() => {
              props.history.push("/");
            }}
          >
            Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Members;

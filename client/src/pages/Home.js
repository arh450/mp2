import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Container, Row, Button, Col } from "react-bootstrap";
import Axios from "axios";

function Home(props) {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-white">Home Page</h1>
          {isAuth ? (
            <>
              <Button
                className="m-1"
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/members");
                }}
              >
                Members
              </Button>
              <Button
                className="m-1"
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/test");
                }}
              >
                Test
              </Button>
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

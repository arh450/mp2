import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext.js";

import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
  Form,
  Button,
} from "react-bootstrap";

import logo from "./moviephood_logo.png";
import "./style.scss";

const AppNavbar = (props) => {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar variant="dark" className="p-4" id="appNavBar">
        <Container>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-1"
          />{" "}
          <Navbar.Brand href="#home">MoviePhood</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {isAuth ? (
                <>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#home">Browse</Nav.Link>
                  <Nav.Link href="#home">Favorites</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#home">Home</Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <DropdownButton
                title="Login"
                id="loginButton"
                className="ml-auto"
                menuAlign="right"
                onSelect={(e) => e.stopPropagation()}
              >
                <Dropdown.Item className="px-3 py-2">
                  <Form>
                    <Form.Group>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Button type="submit" block>
                        Login
                      </Button>
                    </Form.Group>
                    <Form.Group
                      controlId="formBasicCheckbox"
                      className="mt-4 text-center"
                    >
                      <small>
                        <a>
                          <b>Signup</b>
                        </a>
                      </small>
                    </Form.Group>
                  </Form>
                </Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;

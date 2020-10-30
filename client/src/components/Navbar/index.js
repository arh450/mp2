import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext.js";

import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
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
              >
                <Dropdown.Item href="#action/3.1">Action</Dropdown.Item>
                <Dropdown.Item href="#action/3.2">Another action</Dropdown.Item>
                <Dropdown.Item href="#action/3.3">Something</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4">Separated link</Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;

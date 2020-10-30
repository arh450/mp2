import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext.js";
import LoginForm from "../LoginForm/index.js";

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
          <Navbar.Brand href="/">MoviePhood</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {isAuth ? (
                <>
                  <Nav.Link href="#home">Browse</Nav.Link>
                  <Nav.Link href="#home">Favorites</Nav.Link>
                </>
              ) : (
                <></>
              )}
            </Nav>
            <Nav>
              {isAuth ? (
                <>
                  <Button
                    variant="dark"
                    className="ml-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <DropdownButton
                    title="Login"
                    variant="dark"
                    className="ml-auto"
                    menuAlign="right"
                  >
                    <LoginForm />
                  </DropdownButton>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;

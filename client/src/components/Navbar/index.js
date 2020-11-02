import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext.js";
import LoginForm from "../LoginForm/index.js";

import {
  Navbar,
  Nav,
  DropdownButton,
  Container,
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
            width="45"
            height="45"
            id="welcomeLogo"
            className="d-inline-block rounded p-1 align-top mr-1"
          />{" "}
          <Navbar.Brand href="/" className="mt-2">
            MoviePhood
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto mt-2">
              {isAuth ? (
                <>
                  <Nav.Link href="#home">Browse</Nav.Link>
                  <Nav.Link href="#home">Favorites</Nav.Link>
                </>
              ) : (
                <></>
              )}
            </Nav>
            <Nav className="mt-2">
              {isAuth ? (
                <>
                  <Button
                    variant="dark"
                    id="logoutButton"
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
                    id="loginDrop"
                    className="ml-auto"
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

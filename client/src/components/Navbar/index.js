import React from "react";
import { Navbar } from "react-bootstrap";


import logo from './moviephood_logo.png';

const Nav = (props) => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top mr-1"
      />{' '}
        <Navbar.Brand href="#home">MoviePhood</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;

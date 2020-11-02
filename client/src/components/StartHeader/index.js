import React, { useContext, useEffect, useState } from "react";
import anime from "animejs";
import { AuthContext } from "../../AuthContext.js";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

import "./style.scss";
import logo from "../Navbar/moviephood_logo.png";

const StartHeader = (props) => {
  const { isAuth } = useContext(AuthContext);

  const title = "Welcome to MoviePhood!";
  const titleArr = title.split("");

  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".welcomeBrand",
        translateX: [0, -30],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1100,
        delay: (el, i) => 200 + 30 * i,
      })
      .add({
        targets: " .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 500 + 30 * i,
      });
  }, []);

  return (
    <header className="startHeader" id="pageTop">
      <Container className="d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <img
            alt=""
            src={logo}
            width="125"
            height="125"
            className="float-left rounded welcomeBrand p-2"
          />

          {isAuth ? (
            <></>
          ) : (
            <>
              <h1 className="mx-auto mt-5 text-white welcomeText float-left">
                {titleArr.map((letter, i) => (
                  <span className="letter" key={i}>
                    {letter}
                  </span>
                ))}
              </h1>
            </>
          )}

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
        </div>
      </Container>
    </header>
  );
};

export default StartHeader;

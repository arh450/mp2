import React, { useContext, useEffect } from "react";
import anime from "animejs";
import { AuthContext } from "../AuthContext";
import { Container, Button, Col } from "react-bootstrap";
import Axios from "axios";

import "./style.scss";

function Home(props) {
  const { isAuth, logout } = useContext(AuthContext);

  const title = "Welcome to MoviePhood!";

  const titleArr = title.split("");

  console.log(titleArr);

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".welcomeText .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i,
    });
  });

  return (
    <header className="startHeader" id="pageTop">
      <Container className="d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-white welcomeText">
            {titleArr.map((letter) => (
              <span className="letter">{letter}</span>
            ))}
          </h1>
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
}

export default Home;

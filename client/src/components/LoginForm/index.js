import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

const LoginForm = (props) => {
  const { setIsAuth } = useContext(AuthContext);
  const emptyCreds = { emailInput: "", passwordInput: "" };
  const errorMessage = "invalid credentials";
  const [formData, setFormData] = useState(emptyCreds);
  const [credsAreInvalid, setCredsAreInvalid] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputCreds = {
      email: formData.emailInput,
      password: formData.passwordInput,
    };
    login(inputCreds);
    setFormData(emptyCreds);
  };

  const login = (loginCreds) => {
    Axios.post("/api/auth/login", loginCreds)
      .then((user) => {
        console.log("login response ", user);
        setIsAuth(true);
      })
      .catch((err) => {
        setCredsAreInvalid(errorMessage);
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleFormSubmit} id="loginForm" className="px-3 py-2">
      <Form.Group controlId="emailInput">
        <Form.Control
          name="emailInput"
          type="email"
          placeholder="Enter email"
          value={formData.emailInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="inputPassword">
        <Form.Control
          name="passwordInput"
          type="password"
          placeholder="Password"
          value={formData.passwordInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Text className="text-danger">{credsAreInvalid}</Form.Text>
      </Form.Group>
      <Button type="submit" id="loginButton" block>
        Login
      </Button>
      <Form.Group className="mt-4 text-center ">
        <a
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/signup");
          }}
          className="text-white"
        >
          <b>Signup</b>
        </a>
      </Form.Group>
    </Form>
  );
};

export default LoginForm;

{
  /* <Form id="loginForm" className="px-3 py-2">
  <Form.Group>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Button type="submit" id="loginButton" block>
      Login
    </Button>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox" className="mt-4 text-center ">
    <a href="/test" className="text-white">
      <b>Signup</b>
    </a>
  </Form.Group>
</Form>; dsfsdf */
}

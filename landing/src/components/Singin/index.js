import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import {
  FormContent,
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SinginElements";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button pressed");

    setLoading(true);

    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    axios
      .post(
        "https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/login",
        userData
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        console.log("Logged in successfully");
        console.log(localStorage.getItem("FBIdToken"));
        props.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
        setLoading(false);
      });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">WebeSushi</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                onChange={handleEmail}
                id="email"
                name="email"
                type="email"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                onChange={handlePassword}
                id="password"
                name="password"
                type="password"
                required
              />

              <FormButton type="submit">Continue</FormButton>
              <Icon
                style={{ color: "white", marginTop: "20px", fontSize: "12px" }}
                to="/signup"
              >
                Click here to sign up.
              </Icon>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;

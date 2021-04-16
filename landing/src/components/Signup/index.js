import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

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
} from "../Singin/SinginElements";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [handle, setUserHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button pressed");

    setLoading(true);

    const newUserData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      handle: handle,
    };
    console.log(newUserData);
    axios
      .post(
        "https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/signup",
        newUserData
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        console.log("Signed Up successfully");
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        props.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
        setLoading(false);
        console.log(errors);
      });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleUserHandle = (event) => {
    setUserHandle(event.target.value);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> back - WebeSushi - Sign Up Page</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Create new account</FormH1>
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
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput
                onChange={handleConfirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                type="Password"
                required
              />
              <FormLabel htmlFor="for">User Handle</FormLabel>
              <FormInput
                onChange={handleUserHandle}
                id="userHandle"
                name="userHandle"
                type="userHandle"
                required
              />

              <FormButton type="submit">Continue</FormButton>

              <Icon
                style={{ color: "white", marginTop: "20px", fontSize: "12px" }}
                to="/signin"
              >
                Already have an account? go to Sign In page.
              </Icon>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;

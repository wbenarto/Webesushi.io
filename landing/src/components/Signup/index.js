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
  const [confirmPassword, setConfirmPassword] = useState('')
  const [handle, setHandle] = useState={''}
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button pressed");

    setLoading(true);

    const newUserData = {
      email: email,
      password: password,
      confirmPassword : confirmPassword,
      handle: handle
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
        console.log("Logged in successfully");
        console.log(errors);
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

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">WebeSushi</Icon>
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

              <FormButton type="submit">Continue</FormButton>
              <Icon to="/signin">Sign In</Icon>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;

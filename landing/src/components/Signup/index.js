import React, { useState, useEffect } from "react";
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

import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/userActions";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [handle, setUserHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { UI } = props;

  useEffect(() => {
    console.log(UI);
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI.errors]);
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
    props.signUpUser(newUserData, props.props.history);
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
              {errors.error && (
                <h1 style={{ color: "white" }} variant="body2">
                  {errors.error.split("/")[1].split("-").join(" ")}
                </h1>
              )}
              {errors.email && (
                <h1 style={{ color: "white" }} variant="body2">
                  {errors.email}
                </h1>
              )}
              {errors.handle && (
                <h1 style={{ color: "white" }} variant="body2">
                  {errors.handle}
                </h1>
              )}
              {errors.confirmPassword && (
                <h1 style={{ color: "white" }} variant="body2">
                  {errors.confirmPassword}
                </h1>
              )}
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

Signup.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signUpUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signUpUser })(Signup);

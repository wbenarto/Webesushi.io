import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
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
  const [errors, setErrors] = useState({});
  const { UI } = props;

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.UI.errors) {
  //     setErrors({errors: nextProps.UI.errors})
  //   }
  // }\

  useEffect(() => {
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI.errors]);

  console.log();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button pressed");
    const userData = {
      email: email,
      password: password,
    };
    props.loginUser(userData, props.props.history);
    console.log(userData);
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
              {errors.error && (
                <h1 style={{ color: "white" }} variant="body2">
                  {errors.error.split("/")[1].split("-").join(" ")}
                </h1>
              )}

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

loginUser.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};
export default connect(mapStateToProps, mapActionsToProps)(Signin);

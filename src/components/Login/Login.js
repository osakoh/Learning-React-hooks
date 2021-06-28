import React, { useEffect, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
// import AuthContext from "../../store/auth-context";
import loginContext from "../../store/login/loginContext";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";

const Login = () => {
  // get context
  const ctx = useContext(loginContext);
  // destructure from context
  const {
    emailValue,
    emailIsValid,
    emailChangeHandler,
    validateEmailHandler,
    passwordValue,
    passwordIsValid,
    passwordChangeHandler,
    validatePasswordHandler,
    loginUser,
    formIsValid,
    setFormIsValid,
  } = ctx;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // example of use effect
  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  // checks if form is valid
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid();
      setFormIsValid();
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
    // eslint-disable-next-line
  }, [emailIsValid, passwordIsValid]);

  // submit login form
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      // log user in
      loginUser(emailValue, passwordValue);
      // check if emial is valid since email input is the first field
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id='email'
          label='E-Mail'
          type='email'
          isValid={emailIsValid}
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id='password'
          label='Password'
          type='password'
          isValid={passwordIsValid}
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

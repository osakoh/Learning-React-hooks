import React, { useReducer } from "react";
import loginContext from "./loginContext";
import loginReducer from "./loginReducer";
import {
  EMAIL_INPUT,
  EMAIL_INPUT_BLUR,
  PASSWORD_INPUT,
  PASSWORD_INPUT_BLUR,
  LOGIN_USER,
  LOGOUT_USER,
  RESET_INPUTS,
  CHECK_FORM_VALIDITY,
} from "../types";

const LoginState = (props) => {
  // global state for the login form
  const initialState = {
    emailValue: "",
    emailIsValid: null,
    passwordValue: "",
    passwordIsValid: null,
    isLoggedIn: false,
    formIsValid: false,
  };

  // initialise useReducer
  const [state, dispatch] = useReducer(loginReducer, initialState);

  // declare functions
  const emailChangeHandler = (event) => {
    dispatch({ type: EMAIL_INPUT, val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatch({ type: EMAIL_INPUT_BLUR });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: PASSWORD_INPUT, val: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatch({ type: PASSWORD_INPUT_BLUR });
  };

  const loginUser = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    // clear/reset login fields
    clearInputFields();

    dispatch({ type: LOGIN_USER });
  };

  const logoutUser = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch({ type: LOGOUT_USER });
  };

  const checkLoggedInUser = () => {
    dispatch({ type: LOGIN_USER });
  };

  const clearInputFields = () => {
    dispatch({ type: RESET_INPUTS });
  };

  // checks form is valid
  const setFormIsValid = () => {
    dispatch({ type: CHECK_FORM_VALIDITY });
  };

  // return a LoginContext Provider
  return (
    <loginContext.Provider
      // value containing any variable & functions to be available to the entire application
      value={{
        //   variables
        emailValue: state.emailValue,
        emailIsValid: state.emailIsValid,
        passwordValue: state.passwordValue,
        passwordIsValid: state.passwordIsValid,
        isLoggedIn: state.isLoggedIn,
        formIsValid: state.formIsValid,

        // functions/methods
        emailChangeHandler,
        validateEmailHandler,
        passwordChangeHandler,
        validatePasswordHandler,
        loginUser,
        logoutUser,
        checkLoggedInUser,
        clearInputFields,
        setFormIsValid,
      }}
    >
      {/* will be used to wrap the entire App component */}
      {props.children}
      {/* will be used to wrap the entire App component */}
    </loginContext.Provider>
  );
};

export default LoginState;

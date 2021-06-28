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

const loginReducer = (state, action) => {
  // evaluates the type dispatched from LoginState.js
  switch (action.type) {
    case EMAIL_INPUT:
      return {
        ...state,
        emailValue: action.val,
        emailIsValid: action.val.includes("@"),
      };

    case EMAIL_INPUT_BLUR:
      return {
        ...state,
        emailValue: state.emailValue,
        emailIsValid: state.emailValue.includes("@"),
      };

    case PASSWORD_INPUT:
      return {
        ...state,
        passwordValue: action.val,
        passwordIsValid: action.val.trim().length > 6,
      };

    case PASSWORD_INPUT_BLUR:
      return {
        ...state,
        passwordValue: state.passwordValue,
        passwordIsValid: state.passwordValue.trim().length > 6,
      };

    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
      };

    case CHECK_FORM_VALIDITY:
      return {
        ...state,
        formIsValid: state.emailIsValid && state.passwordIsValid,
      };

    case RESET_INPUTS:
      return {
        ...state,
        // reset form
        formIsValid: false,
        emailValue: "",
        emailIsValid: false,
        passwordValue: "",
        passwordIsValid: false,
      };

    default:
      return state;
  }
};

export default loginReducer;

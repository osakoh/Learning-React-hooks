import React, { useEffect, useContext, Fragment } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import loginContext from "./store/login/loginContext";
// import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(loginContext);
  // destructure from context
  const { isLoggedIn, checkLoggedInUser } = ctx;

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      checkLoggedInUser();
    }
    // checkLoggedInUser isn't added as a dependency to avoid an un-ending loop
    // eslint-disable-next-line
  }, []);

  let content = "";
  if (!isLoggedIn) {
    content = <Login />;
  } else {
    content = <Home />;
  }
  console.log(ctx);
  return (
    <Fragment>
      <MainHeader />
      <main>{content}</main>
    </Fragment>
  );
}

export default App;

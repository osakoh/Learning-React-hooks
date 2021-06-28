import React, { useContext } from "react";

import loginContext from "../../store/login/loginContext";
import NavLinks from "./NavLinks";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(loginContext);

  return (
    <nav className={classes.nav}>
      {ctx.isLoggedIn && <NavLinks logoutUser={ctx.logoutUser} />}
    </nav>
  );
};

export default Navigation;

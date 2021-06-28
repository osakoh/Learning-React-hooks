import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import loginContext from "../../store/login/loginContext";

const Home = () => {
  const ctx = useContext(loginContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.logoutUser}>Logout</Button>
    </Card>
  );
};

export default Home;

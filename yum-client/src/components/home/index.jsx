import React, { useContext } from "react";

import Navigation from "../navigation";
import Loading from "../loading";
import classes from "./index.module.css";
import Main from "./Main";
import StartAccount from "./StartAccount";
import UserContext from "../../store/UserContext";

const Home = () => {
  const { token } = useContext(UserContext);

  return (
    <>
      <Navigation />
      <div className={classes.home}>
        <Loading />
        <header />
        <Main />
        {!token && <StartAccount />}
      </div>
    </>
  );
};

export default Home;

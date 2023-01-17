import React, { useContext } from "react";

import Main from "./Main";
import Navigation from "../navigation";
import Loading from "../loading";
import classes from "./index.module.css";
import StartAccount from "./account/StartAccount";
import UserContext from "../../store/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navigation />
      <div className={classes.home}>
        <Loading />
        <header />
        <Main />
        {!user && <StartAccount />}
      </div>
    </>
  );
};

export default Home;

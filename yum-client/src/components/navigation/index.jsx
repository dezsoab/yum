import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import classes from "./index.module.css";
import logo from "../../assets/yum-logo.png";
import UserContext from "../../store/UserContext";

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className={classes.navigation}>
      <Link to="/home">
        <img src={logo} alt="yum! company logo" />
      </Link>
      <div>
        <NavLink to="/home">Home</NavLink>
        {user && <NavLink to="/feed">Feed</NavLink>}
        {user && <NavLink to="/">Logout</NavLink>}
      </div>
    </nav>
  );
};

export default Navigation;

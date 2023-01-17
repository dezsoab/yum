import React, { useState } from "react";

import ToggleButton from "../ToggleButton";
import RegisterForm from "./RegisterForm";
import classes from "../index.module.css";
import LoginForm from "./LoginForm";

const StartAccount = () => {
  const [isOnLoginForm, setIsOnLoginForm] = useState(false);

  return (
    <div className={classes.account}>
      <ToggleButton
        isOnLoginForm={isOnLoginForm}
        setIsOnLoginForm={setIsOnLoginForm}
      />
      <div>{!isOnLoginForm && <RegisterForm />}</div>
      <div>{isOnLoginForm && <LoginForm />}</div>
    </div>
  );
};

export default StartAccount;
